import React from 'react'
import './Dashboard.css'
import dashboard from './Images/dashboard.png'
import member from './Images/member.png'
import revenue from './Images/revenue.png'
import settings from './Images/settings.png'

function Dashboard() {
  return (
    <div>
        <div>
            <div className='dContainer'>
                <div className='dSideMEnu'>
                    <div className='dsideCenter'>
                        <div className='dLogo'>Logo</div>
                        <div className='dMenu dActive'>
                            <img src={dashboard} height='40px' /><br/>
                            <span>Dashboard</span>
                        </div>
                        <div className='dMenu'>
                            <img src={member} height='40px' /><br/>
                            <span>Member</span>
                        </div>
                        <div className='dMenu'>
                            <img src={revenue} height='40px' /><br/>
                            <span>Revenue</span>
                        </div>
                        <div className='dMenu'>
                            <img src={settings} height='40px' /><br/>
                            <span>Settings</span>
                        </div>
                    </div>
                </div>
                <div className='dBody'>
                    <div className='dHeader'>
                        <span className='dUser'>DashBoard</span>
                    </div>
                    <div className='dInnerBodyContainer'>
                        <div className='dContainerOne'>
                            <div className='dCardContainer'>
                                <div className='dCard dCard0'>
                                    <div className='dCardSpace'>
                                        <img src={member}/><br/>
                                        <span className='dName'>Card 1</span><br/>
                                        <span>10000</span><br/>
                                    </div>
                                    <div className='dCircleOne'></div>
                                    <div className='dCircleTwo'></div>
                                </div>
                                <div className='dCard dCard1'>
                                    <div className='dCardSpace'>
                                        <img src={member}/><br/>
                                        <span className='dName'>Card 1</span><br/>
                                        <span>10000</span><br/>
                                    </div>
                                    <div className='dCircleOne'></div>
                                    <div className='dCircleTwo'></div>
                                </div>
                                <div className='dCard dCard2'>
                                    <div className='dCardSpace'>
                                        <img src={member}/><br/>
                                        <span className='dName'>Card 1</span><br/>
                                        <span>10000</span><br/>
                                    </div>
                                    <div className='dCircleOne'></div>
                                    <div className='dCircleTwo'></div>
                                </div>
                                <div className='dCard dCard3'>
                                    <div className='dCardSpace'>
                                        <img src={member}/><br/>
                                        <span className='dName'>Card 1</span><br/>
                                        <span>10000</span><br/>
                                    </div>
                                    <div className='dCircleOne'></div>
                                    <div className='dCircleTwo'></div>
                                </div>
                                <div className='dCard dCard4'>
                                    <div className='dCardSpace'>
                                        <img src={member}/><br/>
                                        <span className='dName'>Card 1</span><br/>
                                        <span>10000</span><br/>
                                    </div>
                                    <div className='dCircleOne'></div>
                                    <div className='dCircleTwo'></div>
                                </div>
                            </div>
                            <div>
                                <div className='dSubContainer'>
                                    <div className='dSubOne'>
                                        <div className='dSubInside'>
                                            <div className='dSubTitle'>Today</div>
                                            <div className='dSubListScroll'>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='dSubTwo'>
                                    <div className='dSubInside'>
                                            <div className='dSubTitle'>Good Day</div>
                                            <div className='dSubListScroll'>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='dContainerTwo'>
                        <div className='dSubInside'>
                                            <div className='dSubTitle'>Today</div>
                                            <div className='dSubListScrollTwo'>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                                <div className='dSubList'>
                                                    <span>John</span>
                                                    <span>32</span>
                                                    <span>98090767899</span>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard