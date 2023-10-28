import Navbar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect, useRef } from 'react';
import appLogo from "../pages/icon.png";
import Button from '@mui/material/Button';
const user = localStorage.getItem('user');
class Home extends React.Component {


    render() {
        if (user != "logged") {
            window.location.href = "/";
            return
          }
    return ( 
        <React.Fragment>
            <Navbar />
            <div className='questCard row' style={{marginTop: 70 + 'px', marginRight: 0}}>
                <div className='col-md-3 col-sm-12'>
                    <img src={appLogo} width="80px" height="80px" alt="" />
                </div>
                <div className='col-md-6 col-sm-12'>
                <p style={{ color: 'white', marginTop: 20 + 'px'}} className="">
                Begin your quest—Test drive Forward Enterprise in our <br/> free browser game
                </p>
                </div>
                <div className='col-md-3 col-sm-12'>
                <a href="#" className='btn btn-primary'>
                    Play <br />
                    Forward <br />
                    Quest
                </a>
                </div>  
            </div>

            
            <div className="bg-blue py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-5 pt-5 text-white text-center">
                            <h1 className="pb-3">Secure and assure
                                <br />
                                your network
                            </h1>
                            <p className="pb-5 mb-5">
                                Breakthrough solutions for network security and reliability, powered by the industry’s most advanced
                                <a href="#" style={{textDecoration: 'none'}}> network digital twin</a>
                            </p>

                            <div className="bgg d-flex justify-content-center">
                                <button className="btn hover-zoom btn-border bg-transparent">
                                    <span><i className="fas fa-lock text-danger mx-1"></i></span>
                                    Network Security
                                </button>
                                <button className="btn hover-zoom btn-border bg-transparent">
                                    <span><i className="fas fa-cloud mx-1" style={{color: '#acbfd1'}}></i></span>
                                    Multi-cloud
                                </button>
                                <button className="btn hover-zoom btn-border bg-transparent text-center">
                                    <span className="d-flex"><i className="fa fa-check-square mx-3 mt-2" style={{color: '#1ccfd8', fontSize: 25 + 'px' }}></i></span>
                                    Network <br /> Assurance
                                </button>
                            </div>
                            <div className="m-3">
                                <a href="" style={{color: '#69ce33', textDecoration: 'none' }}>Calculate the ROI of a network digital twin </a>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-5 pt-5">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block carousel-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGWhOkJo-qRIe8mlDYf_ClqnpAy88OnH2SIVdrDUv3-tMyKpXC_BG4otJSMP1AHICp7E&usqp=CAU" alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block carousel-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRWu7i6R9krXAMoqflVyrm4Us6kak273xZCTQfHgPSMW5ryTTsf_PBBPxrzy75E31plg&usqp=CAU" alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                                <ul className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
                

            <div className="row m-0 p-0" >
            <div className="col-3 col-md-2 col-lg-1">
                <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/Goldman-Sachs-1000-01.jpg" style={{width: "100%", height: 'auto'}} alt="Logo 1" />
            </div>
            <div className="col-3 col-md-2 col-lg-1">
                <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/Goldman-Sachs-1000-01.jpg" style={{width: "100%", height: 'auto'}} alt="Logo 2" />
            </div>
            <div className="col-3 col-md-2 col-lg-1">
                <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/Goldman-Sachs-1000-01.jpg" style={{width: "100%", height: 'auto'}} alt="Logo 2" />
            </div>
            <div className="col-3 col-md-2 col-lg-1">
                <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/Goldman-Sachs-1000-01.jpg" style={{width: "100%", height: 'auto'}} alt="Logo 2" />
            </div>
            <div className="col-3 col-md-2 col-lg-1">
                <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/Goldman-Sachs-1000-01.jpg" style={{width: "100%", height: 'auto'}} alt="Logo 2" />
            </div>
            <div className="col-3 col-md-2 col-lg-1">
                <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/Goldman-Sachs-1000-01.jpg" style={{width: "100%", height: 'auto'}} alt="Logo 2" />
            </div>
            <div className="col-3 col-md-2 col-lg-1">
                <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/Goldman-Sachs-1000-01.jpg" style={{width: "100%", height: 'auto'}} alt="Logo 2" />
            </div>
            <div className="col-3 col-md-2 col-lg-1">
                <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/Goldman-Sachs-1000-01.jpg" style={{width: "100%", height: 'auto'}} alt="Logo 2" />
            </div>
            <div className="col-3 col-md-2 col-lg-1">
                <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/Goldman-Sachs-1000-01.jpg" style={{width: "100%", height: 'auto'}} alt="Logo 2" />
            </div>
            <div className="col-3 col-md-2 col-lg-1">
                <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/Goldman-Sachs-1000-01.jpg" style={{width: "100%", height: 'auto'}} alt="Logo 2" />
            </div>
            <div className="col-3 col-md-2 col-lg-1">
                <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/Goldman-Sachs-1000-01.jpg" style={{width: "100%", height: 'auto'}} alt="Logo 2" />
            </div>
            <div className="col-3 col-md-2 col-lg-1">
                <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/Goldman-Sachs-1000-01.jpg" style={{width: "100%", height: 'auto'}} alt="Logo 2" />
            </div>
            </div>

            <div className="mt-3 mb-5">
                <p className="text-center text-secondary" style={{fontSize: 18+'px'}}>Global 2000 companies and top federal agencies trust their mission-critical networks to Forward Networks. 
                    <a href="" style={{textDecoration: 'none'}}>Learn how</a>
                </p>
            </div>

            {/* Network Security */}
            <div className="mt-5 mb-5 pt-5 text-center">
                <h1>Network Security</h1>
                <p className="text-dark" >Improve network security and SOC efficiency using Forward <br/> Enterprise, the  
                    <a href="#" style={{textDecoration: 'none'}}>most-awarded network security platform </a>in its className
                </p>
            </div>

            <div class="backgroundlinearblue" >
                <div className="container my-5">
                    <div className="row">
                    <div className="col-md-12 col-lg-4 mt-4">
                        <div className="card shadow-lg border-0" style={{borderRadius: 20+'px'}}>
                            <img  src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/sec-blast-radius.jpg" className="p-2 card-img-top" alt="..." />
                            <div className="card-body">
                            <h4 className="card-title text-center" style={{fontWeight: 700}}>Attack Surface Management</h4>
                            <p className="card-text text-secondary text-center">Speed remediation with Blast Radius Identification—detailed information on all devices connected to a compromised host, in a single intuitive interface.</p>
                            <a href="#" style={{textDecoration: 'none', fontSize: 14 + 'px', fontWeight: 600 }}>Learn more about Attack Surface Management</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 mt-4">
                        <div className="card shadow-lg" style={{borderRadius: 20+'px'}}>
                            <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/sec-blast-radius.jpg" className="p-2 card-img-top" alt="..." />
                            <div className="card-body">
                            <h4 className="card-title " style={{fontWeight: 700}}>Vulnerability Management</h4>
                            <p className="card-text text-secondary text-center">Reduce risk by identifying devices with CVE vulnerabilities across your global network. Prioritize remediation based on severity and configured features.</p>
                            <a href="#" style={{textDecoration: 'none', fontSize: 14 + 'px', fontWeight: 600 }}>Learn more about Attack Surface Management</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 mt-4">
                        <div className="card shadow-lg" style={{borderRadius: 20+'px' }}>
                            <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/07/sec-blast-radius.jpg" className="p-2 card-img-top" alt="..." />
                            <div className="card-body">
                            <h4 className="card-title text-center" style={{fontWeight: 700}}>Security Posture Management</h4>
                            <p className="card-text text-secondary text-center">Validate that global network security posture complies with zero trust design goals for multi-cloud and on-premises networks</p>
                            <a href="#" style={{textDecoration: 'none', fontSize: 14 + 'px', fontWeight: 600 }}>Learn more about Attack Surface Management</a>
                            </div>
                        </div>
                    </div>
                    
                
                
                    </div>
                </div>

                <div style={{textAlign: 'center'}}>
                    <Button variant="contained" color="primary" style={{ borderRadius: 18 + 'px'}}>
                        <span className='p-2 px-5'> Learn more about Forward Networks Security Solutions </span>
                    </Button>
                </div>

                {/* Multi Cloud */}
                <div className="mt-5 mb-5 pt-5 text-center">
                    <h1>Multi-cloud</h1>
                    <p className="text-dark" >Get end-to-end visibility for multi-cloud environments and <br/> validate security controls, in a single pane of glass
                    </p>
                </div>

            
                <div className='row mx-5' style={{ backgroundColor: '#6FA9DC', borderRadius: 50 + 'px'}}>
                    <div className="col-md-6 mt-4">
                        <div class="card border-0 shadow">
                            <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/08/Path-analysis-with-VPC-connectivity-and-resources-with-availability-zones-and-cloud-function-cards-1536x864.png" class="card-img-top" alt="..." />
                        </div>
                            <div>
                                <h2 class="card-title">End-to-end visibility</h2>
                                <p class="card-text">Visualize all cloud network resources and their behavior, across AWS, GCP, and Azure</p>
                            </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div class="card border-0 shadow">
                            <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/08/Path-analysis-with-VPC-connectivity-and-resources-with-availability-zones-and-cloud-function-cards-1536x864.png" class="card-img-top" alt="..." />
                        </div>
                            <div>
                                <h2 class="card-title">Continuous security audit</h2>
                                <p class="card-text">Automatically verify that cloud security posture adheres to corporate policy</p>
                            </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div class="card border-0 shadow">
                            <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/08/Path-analysis-with-VPC-connectivity-and-resources-with-availability-zones-and-cloud-function-cards-1536x864.png" class="card-img-top" alt="..." />
                        </div>
                            <div>
                                <h2 class="card-title">Service assurance</h2>
                                <p class="card-text">Validate that your cloud networks are optimally configured to deliver critical applications and services</p>
                            </div>
                    </div>
                    <div className="col-md-6 mt-4 mb-4">
                        <div class="card border-0 shadow">
                            <img src="https://www.forwardnetworks.com/wp-content/uploads/2022/08/Path-analysis-with-VPC-connectivity-and-resources-with-availability-zones-and-cloud-function-cards-1536x864.png" class="card-img-top" alt="..." />
                        </div>
                            <div>
                                <h2 class="card-title">Forward Cloud in action</h2>
                                <p class="card-text">See how Forward Cloud delivers unprecedented multi-cloud visibility and verification [5:04]</p>
                            </div>
                    </div>
        
                </div>
            </div>


            <div style={{textAlign: 'center'}} className="mt-5">
                <Button variant="contained" color="primary" style={{ borderRadius: 18 + 'px'}}>
                    <span className='p-2 px-5'> Learn more about Forward Networks Multi-cloud Solutions </span>
                </Button>
            </div>


            <div className='backgroundlinearblue1 mt-5'>
                <h1 className='mt-3'>Explore Digital Twins in Network Modeling</h1>
                <p>Unlock Valuable Insights and Exclusive Benefits! Sign Up for the Complete Case Study and More.</p>
                <Button variant="contained" color="primary" style={{ borderRadius: 0 + 'px'}}>
                        <span className='p-2 fs-5'>READ THE CASE STUDY </span>
                </Button>
            </div>


             {/* Network Assurance */}
            <div className='container networkblock'>
                <h1>Network Assurance</h1>
                <p>Gain operational efficiency and avoid expensive outages with a single source of truth</p>
                <div className="row mt-5">
                    <div className='networkblock1 col-md-4 col-sm-12'>
                        <i className="fa-solid fa-clock"></i>
                        <h3>Save time</h3>
                        <p>Instant searchable access to all global network information</p>
                    </div>
                    <div className='networkblock2 col-md-4 col-sm-12'>
                        <i className="fa-regular fa-square-check"></i>
                        <h3>Operate with confidence</h3>
                        <p>Proactively verify that your network behavior matches your intent</p>
                    </div>
                    <div className='networkblock3 col-md-4 col-sm-12'>
                        <i className="fa-sharp fa-solid fa-gears"></i>
                        <h3>Derisk automation</h3>
                        <p>Automate network workflows with accurate, comprehensive data and best-of-breed integrations</p>
                    </div>
                </div>
            </div>


            <div style={{textAlign: 'center', marginTop: 50 + 'px', marginBottom: 60 + 'px'}}>
                    <Button variant="contained" color="primary" style={{ borderRadius: 18 + 'px'}}>
                        <span className='p-2 px-5'> Learn more about Forward Networks' Assurance Solutions </span>
                    </Button>
            </div>


            {/* Gartner peer */}
            <div className="py-5" style={{ backgroundColor: '#DBE4EC' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mt-5 pt-5 text-white">
                            <h1 className="pb-3" style={{ color: '#002856' }}>Gartner
                                <br />
                                Peer <span style={{ color: '#40B3E1' }}>Insights</span>
                            </h1>
                            <p className="pb-5 text-dark">
                            Read our reviews on Gartner Peer Insights and see why customers love Forward Enterprise
                            </p>

                            <button className="btn hover-zoom btn-border-bold bg-transparent" style={{color: '#0086d3'}}>
                                Read Reviews
                            </button>

                        </div>

                        <div className="col-lg-8 mt-5 pt-5">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block" src="https://www.forwardnetworks.com/wp-content/uploads/2023/03/gartner-snippet-2.png" alt="First slide" />
                                        
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block" src="https://www.forwardnetworks.com/wp-content/uploads/2023/03/gartner-snippet-3a.png" alt="Third slide" />
                           
                                    </div>
                                </div>

                                <ul className="carousel-indicators" >
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ul>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>   
         

            {/* BLue shade profile and other cards */}
                <div className='backgroundlinearblue2'>
                    <div className='row'>
                        <div className="col-md-6 mt-4">
                            <div class="card border-0 shadow" style={{background: '#1C8FC9',  width: 80 + '%'}}>
                                <img src="https://www.forwardnetworks.com/wp-content/uploads/2023/08/Not-Disney_.png" style={{ borderRadius: 50 + 'px' }} alt="..." />
                            </div>
                            <div>
                                <h1 class="card-title mt-3">Global Entertainment Company Saves Hundreds of IT Hours Every Year with
                                Forward Networks</h1>
                                <p class="card-text mt-3">Read how a Fortune 100 company increases overall efficiency and continuously ensures policy compliance with Forward Enterprise.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                        <div class="card border-0 shadow" style={{background: '#1C8FC9',  width: 80 + '%'}}>
                                <img src="https://www.forwardnetworks.com/wp-content/uploads/2023/08/Screenshot-2023-08-09-at-5.26.42-PM.png"  style={{ borderRadius: 50 + 'px' }}  alt="..." />
                            </div>
                            <div>
                                <h1 class="card-title mt-3">Understanding the Network with Mathematical Certainty Helps a Global Payment Processing Company Keep Their Network Secure and Reliable</h1>
                                <p class="card-text mt-3">Read how a Fortune 500 company measures the value of their digital twin not only in terms of cost savings and efficiency, but also in terms of being able to do things they could not do before.</p>
                            </div>
                        </div>
                    </div>
                
                </div>


             {/* You're covered with Forward */}
        <div className='allcompanylogos container'>
            <div className='companylogo'>
                <h1 className='text-center'>You're covered with Forward</h1>
                <p className='text-center'>Forward Enterprise is multi-vendor and fully-scalable</p>
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />
                <img src={appLogo} width="80px" height="80px" />

            </div>
        </div>


        {/* See for yourself */}
        <div className='wraptextblock'>
            <div className='textblock'>
                <h1>See for yourself</h1>
                <p>Winner of over 20 industry awards, Forward Enterprise is the best-in-class network modeling software that customers love</p>
                <img src={appLogo}  width="80px" height="80px" />
                <img src={appLogo}  width="80px" height="80px" />
                <img src={appLogo}  width="80px" height="80px" />
                <img src={appLogo}  width="80px" height="80px" />

            </div>
                <Button variant="contained" color="secondary">
                    Request a demo
                </Button>
        </div>


        <Footer />
        </React.Fragment>
     );
    }
}

export default Home;