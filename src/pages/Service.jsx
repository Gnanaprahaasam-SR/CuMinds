import React, { useEffect } from 'react';
import Image from '../images/datascience-top.png';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const VerticalTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', marginBottom: "5%" }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', minWidth: "240px" }}
            >
                <Tab label="Benefits of Risk-Based Data Science with QbD" {...a11yProps(0)} className='fw-bold' sx={{ color: value === 0 ||1 ||2 ? "#1A5319" : "inherit", }} />
                <Tab label="Our Deep Expertise" {...a11yProps(1)} className='fw-bold' sx={{ color: value === 0 ||1||2 ? "#1A5319" : "inherit", }}/>
                <Tab label="Our flexible Engagement" {...a11yProps(2)} className='fw-bold' sx={{ color: value === 0 ||1||2 ? "#1A5319" : "inherit" }}/>

            </Tabs>
            <TabPanel value={value} index={0} >
                <Typography variant='title fw-bold fs-3 font-color'>Benefits of Risk-Based Data Science with QbD</Typography>
                <p className='py-2 fw-bold '>By following the QbD approach, you gain greater control over your clinical trials and ensure safety and efficiency. Here are some of the key benefits:</p>
                <p><b className='secondary-font-color'>Improved data quality: </b>By proactively managing risks and ensuring all relevant data is captured, the overall quality of the data improves.</p>
                <p><b className='secondary-font-color'>Reduced risk of potential issues:</b> Early identification and mitigation of risks prevent problems from arising later in the trial.</p>
                <p><b className='secondary-font-color'>Increased process efficiency:</b> Standardized data management and continuous monitoring streamline the clinical trial process.</p>
                <p><b className='secondary-font-color'>Proactive Risk management reduces time & cost:</b> Addressing risks early saves time and money that would otherwise be spent fixing problems later.</p>
                <p><b className='secondary-font-color'>Enhanced regulatory compliance:</b> Following QbD principles ensures your data meets regulatory requirements for submission and reporting.</p>
                <p>In essence, Risk-Based Data Science powered by QbD is a smarter way to conduct clinical trials. It leverages data to proactively manage risk and ensure the quality of the data you collect. This leads to more efficient trials, better quality data, and, ultimately, the development of safer and more effective products.</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography variant='title fw-bold fs-3 font-color '>Deep Expertise in Clinical Research:</Typography>
                <p>30+ Cumulative Years of experience leading risk-based implementations, clinical operations, and data management</p>
                <p>Advanced data skills, including programming (SAS, Python, R), analytics, and data science.</p>
                <p>Proficient in data review tools: Spotfire, Tableau, PowerBI, Cluepoints, Medidata Detect, TRI-OPRA, Comprehend.</p>
                <p>Product Management experience to ensure successful project delivery.</p>
                <p>AI Solutions Consulting expertise to bring innovative solutions to clinical research.</p>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <p><b className='font-color'>Stay Long (more than 3 Months)</b></p>
                <p><b className='secondary-font-color'>Long-term Engagement:</b> Delve profoundly into your projects with our team accompanying you for an extended span, ensuring sustained success and growth.</p>
                <p><b className='font-color'>Stay short (1 to 3 Months)</b></p>
                <p><b className='secondary-font-color'>Short-term Engagement:</b> Our short-term Engagement is meticulously designed to tackle specific challenges efficiently and effectively for urgent and precise problem-solving. This tailored approach ensures that your immediate needs are met precisely and quickly.</p>
                <p><b className='font-color'>Stay Quick (Less than a Month)</b></p>
                <p><b className='secondary-font-color'>Rapid response Engagement:</b> When time sensitivity is paramount, our rapid response team promptly initiates action, delivering solutions quickly and accurately

                </p>
            </TabPanel>

        </Box>
    );
}

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};

const Scroll = () => {
    const control = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <img src={Image} alt='not found' className='img-fluid' />
        </motion.div>
    );
};

function Service() {
    return (
        <div className='container service mt-5 pt-5'>
            <div className='header-section '>
                <div className='header-heading'>
                    <p className='title'>RISK- BASED DATA SCIENCE</p>
                    <h3 className='title fw-bold'>powered by QbD</h3>
                    <p className='sub-title'>Your Data, Our Expertise, Collaborative Success!</p>
                </div>
            </div>
            <div className='content-section mx-5'>
                <p className='font-color'>Risk-based data science supports the proactive identification, assessment, monitoring, and mitigation of risks in clinical trials using Quality by Design (QbD) principle.</p>
                <Scroll />
            </div>
            <VerticalTabs />

        </div>
    );
}

export default Service;
