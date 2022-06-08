import React from 'react';
import { NavLink } from 'react-router-dom';
//@ts-ignore
import block1 from '../../public/images/shutterstock_1606410442 1.png';
//@ts-ignore
import block2 from '../../public/images/IMG_5588 3 1.png';
//@ts-ignore
import block3 from '../../public/images/Mask Group.png';
//@ts-ignore
import block4 from '../../public/images/Group 109.png';





function information(){
    return(
		<div className='container'>
			<div className='wrap_information'>

				<div className='information_block1'>
					<img src={block1} id='block1_img'/>
					<h4 className='block1_title information_title'>Business <br/> in Switzerland </h4>
					<p className='block1_text information_text'>Make Switzerland a new home for your business. If you have an idea, we can help you with strategic and administrative implementation: Company Setup, Legal and Accounting support, Strategy of growth in Swiss market, Marketing strategy and Positioning, Partnerships and Investments.</p>
					<NavLink to='/business_in_switzerland' className='block1_more information_more'>More</NavLink>
				</div>

				<div className='information_block2'>
					<img src={block2} id='block2_img'/>
					<h4 className='block2_title information_title'>Business development</h4>
					<p className='block2_text information_text'>First understand the culture, then bring your product to people. We use an academic approach to business collaboration which is built upon cross-cultural and social science. In a combination with our experience in the EmTech presentations and sales, it gives us a unique set of skills. We build positioning in a way that be it business or customer segments, your idea will be understood and your product will be loved.</p>
					<NavLink to='/business_development' className='block2_more information_more'>More</NavLink>
				</div>

				<div className='information_block3'>
					<img src={block3} id='block3_img'/>
					<h4 className='block3_title information_title'>EmTech IM in Davos</h4>
					<p className='block3_text information_text'>Sharpest investment ideas on the top of Swiss mountains. Having an extensive background in investment banking and business development, our team created an annual business gathering the EmTech Investment Meeting (2019, 2020) focused on bringing together the most prominent figures of fintech, AI, government officials and HNI to share insights, envision the future and find a key partnership for an upcoming year. <br/> 2022. The International EmTech Investment Association Forum will take place in Davos from 16 to 22 of January 2022. The community-driven event will be as usual co-hosted by Quantum Leap Strategy AG.</p>
					<NavLink to='/emtech_in_davos'className='block3_more information_more'>More</NavLink>
				</div>

				<div className='information_block4'>
					<img src={block4} id='block4_img'/>
					<h4 className='block4_title information_title'>Investment Club</h4>
					<p className='block4_text information_text'>QL Strategy is an authorized Swiss financial intermediary as per Swiss Law and conducts all necessary steps to protect investors, verify the source of funds and fight against Money laundering. More information about the investment Club will be presented in Davos at the International EmTech Investment Meeting Forum, which takes place from 16 to 22 of January 2022. Please let us know if you would like to be within the club members and we will contact you.</p>
					<NavLink to='/investment_club_start' className='block4_more information_more'>More</NavLink>
				</div>

			</div>
	 	</div>
   )
}

export default information;
