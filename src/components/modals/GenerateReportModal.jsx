import React, {useState} from 'react'
import { Button, Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip, SingleSelect, SingleSelectOption } from '@dhis2/ui'
import format1_preview from '../../assets/images/format1_preview.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './modal_styles.scss'
import { useNavigate  } from 'react-router-dom';
import PropTypes from 'prop-types'
import i18n from '../../locales'
import { PeriodDimension } from '@dhis2/analytics'

// import format1_preview from "../../assets/images/format1_preview.png";
import format0_preview from "../../assets/images/format0_preview.png";
import custom from "../../assets/images/periods/custom.png";
import yearly from "../../assets/images/periods/yearly.png";
import quarterly from "../../assets/images/periods/quarterly.png";
import monthly from "../../assets/images/periods/monthly.png";


export const GenerateReportModal = ({hide, onClose, currentlySelected = [], onGenerateReport, onSavePeriods, generateBtnDisabled, orgUnitsData}) => {
    const [chosenFormat, setChosenFormat] = useState(null);
    const [onChoosingFormats, setOnChoosingFormats] = useState(true);
    const navigate = useNavigate();
    const [selectedPeriod, setSelectedPeriod] = useState(currentlySelected);
    const [isHiddenPeriod, setIsHiddenPeriod] = useState(true);
    const togglePeriodModal = () => setIsHiddenPeriod(state => !state)
    const [selectedOrgUnit, setSelectedOrgUnit] = useState('');
    
    const openFormatsList = () => {
        navigate("/report");
    };
    
    //TODO: these formats will later be stored in & retrieved from dhis2 datastore
    const [formats, setFormats] = useState([
        { id: 1, formatTitle: "HMIS Format" },
        { id: 2, formatTitle: "Format 2" },
        { id: 3, formatTitle: "Format 3" },
    ]);
    
      //TODO: these periods will later be stored in & retrieved from dhis2 datastore
      const [periods, setPeriods] = useState([
        { id: 1, periodTitle: "Custom", periodImage: custom },
        { id: 2, periodTitle: "Yearly", periodImage: yearly },
        { id: 3, periodTitle: "Quarterly", periodImage: quarterly },
        { id: 4, periodTitle: "Monthly", periodImage: monthly },
    ]);
    
    const handleFormatSelection = (format) => {
        if (format.id == 1) {
            setOnChoosingFormats(false);
            setChosenFormat(format); 
        }
    };
    
    const handlePeriodSelection = (period) => {
        if (period.periodTitle === "Monthly") {
            setIsHiddenPeriod(false)
        }else{
            alert("Please choose monthly format for now. Thank you!")   // TODO: Replace all simple alerts with dhis2 ui alerts
        }
    }
    return (
        <>
            {/* main modal */}
            <Modal className="generate_report_modal" hide={hide} position="middle" onClose={onClose} large>
                {/* <ModalTitle>My Modal</ModalTitle> */}
                <ModalContent>
                <div>
                    <div className="modal">
                    <div className="modal_header">
                        <div className="title">
                            <span>Generate New Report </span>
                        </div>
                        <div>
                            <p> Choose an organisation unit to generate data for</p>
                            <SingleSelect className="select" 
                                onChange={(selected)=> setSelectedOrgUnit(selected.selected)} 
                                placeholder="Select organization unit"
                                filterable
                                selected={selectedOrgUnit}
                            >
                                {orgUnitsData? orgUnitsData.map((ou, key)=>
                                    <SingleSelectOption label={ou.name} value={ou.id} key={key} />
                                )
                                :
                                ''
                                }
                            </SingleSelect>
                        </div>
                        <br></br>
                        {chosenFormat ? (
                            <div>
                            <p>What time format do you need?</p>
                        </div>
                        ) : (
                            <div className="formats_btns">
                            <span className="recents btn">
                            Recent Formats{" "}
                            <AccessTimeIcon className="icon" fontSize="small" />
                            </span>
                            <span className="new btn" onClick={openFormatsList}>
                            New Formats{" "}
                            <NoteAddIcon className="icon" fontSize="small" />
                            </span>
                        </div>
                        )}
                    </div>
                    <div className="formats">
                        <div
                        className="format_placeholder chosen_format"
                        onClick={() => console.log(chosenFormat ? "yes" : "no")}
                        >
                        <img
                            src={chosenFormat ? format1_preview : format0_preview}
                            alt=""
                            className="format_image new"
                        />
                        <span className="label">
                            {chosenFormat ? chosenFormat.formatTitle : "New"}
                        </span>
                        </div>

                        {/* vertical divider between available formats and chosen format */}
                        <div className="divider"></div>

                        {/* available formats for choose from */}
                        <div className="available_formats">
                        {chosenFormat
                            ? periods.map((period, key) => (
                                <div className="format_placeholder" key={key}>
                                    <img
                                        src={period.periodImage}
                                        alt="Format Image"
                                        className="period_image"
                                        onClick={() => handlePeriodSelection(period)}
                                        />

                                    <span className="label">{period.periodTitle}</span>
                                </div>
                            ))
                            : formats.map((format, key) => (
                                <div
                                    className="format_placeholder"
                                    onClick={() => handleFormatSelection(format)}
                                    key={key}
                                >
                                <img
                                    src={format1_preview}
                                    alt="Format Image"
                                    className="format_image"
                                    />
                                <span className="label">{format.formatTitle}</span>
                                </div>
                            ))}
                        </div>

                        {/* next btn */}
                        <div className="next_btn">
                        <ArrowForwardIosIcon />
                        </div>
                    </div>

                    <div className="bottom_btns">
                        <Button className="btn" secondary onClick={() => {
                            onClose()
                            setChosenFormat(null)
                        }
                            }>
                            {" "}
                            Cancel{" "}
                        </Button>
                        <Button
                            className="btn"
                            primary
                            onClick={() => onGenerateReport(selectedPeriod, selectedOrgUnit)}
                            disabled={generateBtnDisabled}
                            >
                            {" "}
                            Generate Report{" "}
                        </Button>
                    </div>
                    </div>
                </div>
                </ModalContent>
            </Modal>

            {/* periods picker modal */}
            <Modal onClose={() => setIsHiddenPeriod(true)} hide={isHiddenPeriod} large>
            <ModalTitle>{i18n.t('Select period(s)')}</ModalTitle>
            <ModalContent>
                <PeriodDimension
                    maxSelections={2}
                    selectedPeriods={selectedPeriod}
                    onSelect={({ items }) => setSelectedPeriod(items)}
                />
                
            </ModalContent>
            <ModalActions>
                <ButtonStrip end>
                    <Button onClick={togglePeriodModal}>{i18n.t('Cancel')}</Button>
                    <Button
                        primary
                        onClick={() => {
                            onSavePeriods(selectedPeriod)
                            togglePeriodModal()
                        }}
                        disabled={selectedPeriod.length == 0? true:false}
                    >
                        {i18n.t('Save')}
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
        </>
    )
  }

export default GenerateReportModal


