import React from 'react';
//@ts-ignore
import background from '../../public/images/Group 162.png';
//@ts-ignore
import logo from '../../public/images/Group 207.svg';
//@ts-ignore
import person_1 from '../../public/images/20200621_230059 2.jpg';
//@ts-ignore
import person_2 from '../../public/images/image 21.jpg';
//@ts-ignore
import person_3 from '../../public/images/image 27.jpg';
//@ts-ignore
import person_4 from '../../public/images/image 19.jpg';
//@ts-ignore
import person_5 from '../../public/images/image 20.jpg';
//@ts-ignore
import person_6 from '../../public/images/Rectangle 110.jpg';
//@ts-ignore
import person_6 from '../../public/images/Rectangle 110.jpg';
//@ts-ignore
import map from '../../public/images/XMLID 3.png';
//@ts-ignore
import location from '../../public/images/Rectangle 117.svg';








function About(){
    return(
        <div className='container'>
          <div className='wrap_about'>
			 	<div className='about_header'>
					 <img src={background} id='background_about'/>
					 <img src={logo} id='logo_about'/>
					 <div className='about_header_block'>
						 <p className='header_block_title'>Quantum Leap Strategy</p>
						 <p className='header_block_subtitle'>The best strategy for tech companies growth built upon an innovative academic approach to intercultural business collaboration.</p>
						 <a href="#" className='header_block_link1'>Team</a>
						 <a href="#" className='header_block_link2'>Address</a>
						 <a href="#" className='header_block_link3'>Contact</a>
					 </div>
				</div>
				<h3 className='about_title'>About the company</h3>
				<p className='about_text'>Quantum Leap Strategy AG is a Swiss Financial and Management Advisory firm. The company is focused on positioning and new market entrance, using an academic approach to intercultural business collaboration and experience in emerging technologies presentation. QL Strategy is registered as a Self Regulated Organisation according to the Swiss Law and conducts all necessary steps to protect investors, verifying the source of funds and protecting against Money laundering. QL Strategy operates globally with its headquarters based in Switzerland. Quantum Leap Strategy AG hosts the Emerging Technologies Investment Meeting annually in Davos. The conference is supported and recommended by leading industry experts as `The TOP 5 events during WEF week in Davos.</p>
				<div className='about_information'>
					<div className='about_information_block1'>
						<p className='information_block_title'>Administrative Information:</p>
						<p className='information_block_text'>Quantum Leap Strategy AG</p>
						<p className='information_block_text'>SRO Licensed, monitored by SRO-TREUHAND SUISSE, Bern</p>
						<p className='information_block_text'>Registration: CHE-105.375.399</p>
						<p className='information_block_text'>Address: Gewerbestrasse 7, 6330, Cham, Switzerland</p>
						<p className='information_block_text'>Website: QLStrategy.ch	</p>
						<p className='information_block_text'>E-mail: AG@qlstrategy.ch</p>
					</div>
					<div className='about_information_block2'>
						<p className='information_block_title'>Management:</p>
						<p className='information_block_text'>Alena Yudina – Managing Director</p>
						<p className='information_block_text'>E-mail: a.yudina@qlstrategy.ch</p>
						<p className='information_block_text'>Mobile: +41 79 269 53 60</p>
						<p className='information_block_text'>Location: Zurich, Switzerland</p>
					</div>
					<div className='about_information_block3'>
						<p className='information_block_title'>Bank details: </p>
						<p className='information_block_text'>Bank name: Post Finance</p>
						<p className='information_block_text'>Account-Nr .: 15-149265-6</p>
						<p className='information_block_text'>IBAN: CH73 0900 0000 1514 9265 6</p>
						<p className='information_block_text'>BIC: POFICHBEXXX</p>
					</div>
				</div>

				<div className='about_benefits'>
					
						<div className='benefits1_row1'>
							<div className='benefits_icon'>
								<svg width="48" height="48" viewBox="0 0 48 48" fill="#D0000F" xmlns="http://www.w3.org/2000/svg" id='about_icon'>
								<path d="M40 14H32V10L28 6H20L16 10V14H8C5.8 14 4 15.8 4 18V28C4 29.5 4.8 30.76 6 31.46V38C6 40.22 7.78 42 10 42H38C40.22 42 42 40.22 42 38V31.44C43.18 30.74 44 29.46 44 28V18C44 15.8 42.2 14 40 14ZM20 10H28V14H20V10ZM8 18H40V28H30V22H18V28H8V18ZM26 30H22V26H26V30ZM38 38H10V32H18V34H30V32H38V38Z" fill="#D0000F"/></svg></div>
							<p className='about_benefets_text'>Entrepreneurial spirit, results-oriented, flexible and proactive</p>
						</div>
						<div className='benefits2_row1'>
							<div className='benefits_icon'>
							<svg width="38" height="38" viewBox="0 0 38 38" fill="#D0000F" xmlns="http://www.w3.org/2000/svg" id='about_icon'>
							<path d="M19 0C8.55 0 0 8.55 0 19C0 29.45 8.55 38 19 38C29.45 38 38 29.45 38 19C38 8.55 29.45 0 19 0ZM19 4.75C26.885 4.75 33.25 11.115 33.25 19C33.25 26.885 26.885 33.25 19 33.25C11.115 33.25 4.75 26.885 4.75 19C4.75 11.115 11.115 4.75 19 4.75ZM19 9.5C13.775 9.5 9.5 13.775 9.5 19C9.5 24.225 13.775 28.5 19 28.5C24.225 28.5 28.5 24.225 28.5 19C28.5 13.775 24.225 9.5 19 9.5ZM19 14.25C21.66 14.25 23.75 16.34 23.75 19C23.75 21.66 21.66 23.75 19 23.75C16.34 23.75 14.25 21.66 14.25 19C14.25 16.34 16.34 14.25 19 14.25Z" fill="#D0000F"/></svg></div>
							<p className='about_benefets_text'>Clear identification with customer goals, high initiative and positive thinking</p>
						</div>
						<div className='benefits3_row1'>
							<div className='benefits_icon'>
							<svg width="43" height="43" viewBox="0 0 43 43" fill="#D0000F" xmlns="http://www.w3.org/2000/svg" id='about_icon'>
							<path d="M21.5 3.58337C11.6208 3.58337 3.58337 11.6208 3.58337 21.5C3.58337 31.3793 11.6208 39.4167 21.5 39.4167C31.3793 39.4167 39.4167 31.3793 39.4167 21.5C39.4167 11.6208 31.3793 3.58337 21.5 3.58337ZM7.16671 21.5C7.16671 19.8893 7.44621 18.3431 7.93892 16.8972L10.75 19.7084L14.3334 23.2917V26.875L17.9167 30.4584L19.7084 32.25V35.7098C12.651 34.8229 7.16671 28.7957 7.16671 21.5ZM32.8413 30.2308C31.6713 29.2884 29.8976 28.6667 28.6667 28.6667V26.875C28.6667 25.9247 28.2892 25.0132 27.6172 24.3412C26.9452 23.6692 26.0337 23.2917 25.0834 23.2917H17.9167V17.9167C18.8671 17.9167 19.7785 17.5392 20.4505 16.8672C21.1225 16.1952 21.5 15.2837 21.5 14.3334V12.5417H23.2917C24.2421 12.5417 25.1535 12.1642 25.8255 11.4922C26.4975 10.8202 26.875 9.90873 26.875 8.95837V8.222C32.121 10.3523 35.8334 15.498 35.8334 21.5C35.833 24.6618 34.7804 27.7335 32.8413 30.2308Z" fill="#D0000F"/></svg></div>
							<p className='about_benefets_text'>Flexibility to travel around the world for the project`s success</p>
						</div>
					
					
						<div className='benefits1_row2'>
							<div className='benefits_icon'>
							<svg width="52" height="52" viewBox="0 0 52 52" fill="#D0000F" xmlns="http://www.w3.org/2000/svg" id='about_icon'>
							<path d="M44.2812 24.1719H27.8281V7.3125H24.1719V24.1719H7.71875C7.49531 24.1719 7.3125 24.3547 7.3125 24.5781V27.4219C7.3125 27.6453 7.49531 27.8281 7.71875 27.8281H24.1719V44.6875H27.8281V27.8281H44.2812C44.5047 27.8281 44.6875 27.6453 44.6875 27.4219V24.5781C44.6875 24.3547 44.5047 24.1719 44.2812 24.1719ZM44.2812 15.7422H41.4375C41.2141 15.7422 41.0312 15.925 41.0312 16.1484V18.9922C41.0312 19.2156 41.2141 19.3984 41.4375 19.3984H44.2812C44.5047 19.3984 44.6875 19.2156 44.6875 18.9922V16.1484C44.6875 15.925 44.5047 15.7422 44.2812 15.7422ZM44.2812 41.0312H41.4375C41.2141 41.0312 41.0312 41.2141 41.0312 41.4375V44.2812C41.0312 44.5047 41.2141 44.6875 41.4375 44.6875H44.2812C44.5047 44.6875 44.6875 44.5047 44.6875 44.2812V41.4375C44.6875 41.2141 44.5047 41.0312 44.2812 41.0312ZM44.2812 7.3125H41.4375C41.2141 7.3125 41.0312 7.49531 41.0312 7.71875V10.5625C41.0312 10.7859 41.2141 10.9688 41.4375 10.9688H44.2812C44.5047 10.9688 44.6875 10.7859 44.6875 10.5625V7.71875C44.6875 7.49531 44.5047 7.3125 44.2812 7.3125ZM44.2812 32.6016H41.4375C41.2141 32.6016 41.0312 32.7844 41.0312 33.0078V35.8516C41.0312 36.075 41.2141 36.2578 41.4375 36.2578H44.2812C44.5047 36.2578 44.6875 36.075 44.6875 35.8516V33.0078C44.6875 32.7844 44.5047 32.6016 44.2812 32.6016ZM33.0078 10.9688H35.8516C36.075 10.9688 36.2578 10.7859 36.2578 10.5625V7.71875C36.2578 7.49531 36.075 7.3125 35.8516 7.3125H33.0078C32.7844 7.3125 32.6016 7.49531 32.6016 7.71875V10.5625C32.6016 10.7859 32.7844 10.9688 33.0078 10.9688ZM35.8516 41.0312H33.0078C32.7844 41.0312 32.6016 41.2141 32.6016 41.4375V44.2812C32.6016 44.5047 32.7844 44.6875 33.0078 44.6875H35.8516C36.075 44.6875 36.2578 44.5047 36.2578 44.2812V41.4375C36.2578 41.2141 36.075 41.0312 35.8516 41.0312ZM18.9922 41.0312H16.1484C15.925 41.0312 15.7422 41.2141 15.7422 41.4375V44.2812C15.7422 44.5047 15.925 44.6875 16.1484 44.6875H18.9922C19.2156 44.6875 19.3984 44.5047 19.3984 44.2812V41.4375C19.3984 41.2141 19.2156 41.0312 18.9922 41.0312ZM16.1484 10.9688H18.9922C19.2156 10.9688 19.3984 10.7859 19.3984 10.5625V7.71875C19.3984 7.49531 19.2156 7.3125 18.9922 7.3125H16.1484C15.925 7.3125 15.7422 7.49531 15.7422 7.71875V10.5625C15.7422 10.7859 15.925 10.9688 16.1484 10.9688ZM7.71875 10.9688H10.5625C10.7859 10.9688 10.9688 10.7859 10.9688 10.5625V7.71875C10.9688 7.49531 10.7859 7.3125 10.5625 7.3125H7.71875C7.49531 7.3125 7.3125 7.49531 7.3125 7.71875V10.5625C7.3125 10.7859 7.49531 10.9688 7.71875 10.9688ZM10.5625 41.0312H7.71875C7.49531 41.0312 7.3125 41.2141 7.3125 41.4375V44.2812C7.3125 44.5047 7.49531 44.6875 7.71875 44.6875H10.5625C10.7859 44.6875 10.9688 44.5047 10.9688 44.2812V41.4375C10.9688 41.2141 10.7859 41.0312 10.5625 41.0312ZM7.71875 19.3984H10.5625C10.7859 19.3984 10.9688 19.2156 10.9688 18.9922V16.1484C10.9688 15.925 10.7859 15.7422 10.5625 15.7422H7.71875C7.49531 15.7422 7.3125 15.925 7.3125 16.1484V18.9922C7.3125 19.2156 7.49531 19.3984 7.71875 19.3984ZM10.5625 32.6016H7.71875C7.49531 32.6016 7.3125 32.7844 7.3125 33.0078V35.8516C7.3125 36.075 7.49531 36.2578 7.71875 36.2578H10.5625C10.7859 36.2578 10.9688 36.075 10.9688 35.8516V33.0078C10.9688 32.7844 10.7859 32.6016 10.5625 32.6016Z" fill="#D0000F"/></svg></div>
							<p className='about_benefets_text'>Collaborative spirit, conflict solving approach</p>
						</div>
						<div className='benefits2_row2'>
							<div className='benefits_icon'>
							<svg width="43" height="48" viewBox="0 0 43 48" fill="#D0000F" xmlns="http://www.w3.org/2000/svg" id='about_icon'>
							<path d="M11.7578 35.25H15.1172C15.302 35.25 15.4531 35.0812 15.4531 34.875V13.125C15.4531 12.9187 15.302 12.75 15.1172 12.75H11.7578C11.573 12.75 11.4219 12.9187 11.4219 13.125V34.875C11.4219 35.0812 11.573 35.25 11.7578 35.25ZM19.8203 22.125H23.1797C23.3645 22.125 23.5156 21.9562 23.5156 21.75V13.125C23.5156 12.9187 23.3645 12.75 23.1797 12.75H19.8203C19.6355 12.75 19.4844 12.9187 19.4844 13.125V21.75C19.4844 21.9562 19.6355 22.125 19.8203 22.125ZM27.8828 25.5H31.2422C31.427 25.5 31.5781 25.3312 31.5781 25.125V13.125C31.5781 12.9187 31.427 12.75 31.2422 12.75H27.8828C27.698 12.75 27.5469 12.9187 27.5469 13.125V25.125C27.5469 25.3312 27.698 25.5 27.8828 25.5ZM36.9531 5.25H6.04688C5.30361 5.25 4.70312 5.92031 4.70312 6.75V41.25C4.70312 42.0797 5.30361 42.75 6.04688 42.75H36.9531C37.6964 42.75 38.2969 42.0797 38.2969 41.25V6.75C38.2969 5.92031 37.6964 5.25 36.9531 5.25ZM35.2734 39.375H7.72656V8.625H35.2734V39.375Z" fill="#D0000F"/></svg></div>
							<p className='about_benefets_text'>Lean project management experienced professionals</p>
						</div>
					
				</div>

				<p className='about_team_title'>Team</p>
				<div className='about_team'>
					<div className='about_person1'>
						<div className='person_photo'>
							<img src={person_1} id='person_img'/>
						</div>
						<p className='person_name'>Alena Yudina</p>
						<p className='person_position'>Managing director</p>
						<p className='person_text'>Alena is specialized in building strategic partnerships, business positioning for new markets and brand awareness. Having 15 years professional experience in governmental and business structures, Alena has always been involved in event management, be it in international conferences or local charity. Implying intercultural collaboration studies into real life, she could see how difficult it is for businesses to grow in a new environment. The idea to help tech companies and investment funds to grow and open up new horizons, brought to creating the EmTech Investment Meetings, which was recommended among top 5 events during the Davos Week. 
						<br/>
						<br/>
						MA in International Relations. Certified Business Analyst. CFA Candidate (Dec 2020).
						<br/>
						<br/>
						In progress PhD on “Intercultural business collaboration”
						<br/>
						<br/>
						Director of the Charity Foundation "Country of Talents".</p>
						<p className='person_info_1'>E-mail: a.yudina@qlstrategy.ch		</p>
						<p className='person_info'>WhatsApp: +41 79 2695360 	</p>
						<p className='person_info'>Telegram: @aljona_yudina </p>
						<p className='person_info'>WeChat: Aljona_Yudina</p>
					</div>
					<div className='about_person2'>
						<div className='person_photo'>
							<img src={person_2} id='person_img'/>
						</div>
						<p className='person_name'>Oxana Herzog</p>
						<p className='person_position'>COO</p>
						<p className='person_text'>Oxana has more than 10 years project management and management consulting experience in an international business, and  brings her operation excellence skills, business development capabilities and strategy development expertise. Oxana developed her cross functional skills in companies like PUMA AG, working for the EMEA region in Switzerland,  and is a certified trainer on communication and coaching from PUMA University, Herzoganaurach, DE.  She has strong leads in the mechanical engineering industry, manufacturing, quality control and industrial events management brought from working experience in metrology field. Oxana is Project Manager specialist, certified by KV Business School Zurich, and has Master Degree in International Economy from Saint-Petersburg State University. </p>
						<p className='person_info_1'>E-mail: o.herzog@qlstrategy.ch		</p>
						<p className='person_info'>WhatsApp: +41 76 4585194</p>
					</div>
					<div className='about_person3'>
						<div className='person_photo'>
							<img src={person_3} id='person_img'/>
						</div>
						<p className='person_name'>Oxana Herzog</p>
						<p className='person_position'>COO</p>
						<p className='person_text'>Oxana has more than 10 years project management and management consulting experience in an international business, and  brings her operation excellence skills, business development capabilities and strategy development expertise. Oxana developed her cross functional skills in companies like PUMA AG, working for the EMEA region in Switzerland,  and is a certified trainer on communication and coaching from PUMA University, Herzoganaurach, DE.  She has strong leads in the mechanical engineering industry, manufacturing, quality control and industrial events management brought from working experience in metrology field. Oxana is Project Manager specialist, certified by KV Business School Zurich, and has Master Degree in International Economy from Saint-Petersburg State University. </p>
						<p className='person_info_1'>E-mail: o.herzog@qlstrategy.ch		</p>
						<p className='person_info'>WhatsApp: +41 76 4585194	</p>
					</div>
					<div className='about_person4'>
						<div className='person_photo'>
							<img src={person_4} id='person_img'/>
						</div>
						<p className='person_name'>Darya Kharchanka</p>
						<p className='person_position'>Head of Sales</p>
						<p className='person_text'>Darya is a marketing and sales professional with over 5 years of experience in the technology sector, specialising in marketing automation and growth-hacking techniques.
						<br/>
						<br/>
						She obtained an MSc in BA, majoring in Entrepreneurship from the University of Applied Sciences and Arts of Western Switzerland.</p>
						<p className='person_info_1'>E-mail: </p>
						<p className='person_info'>WhatsApp</p>
						<p className='person_info'>Telegram: </p>
						<p className='person_info'>WeChat: </p>
					</div>
					<div className='about_person5'>
						<div className='person_photo'>
							<img src={person_5} id='person_img'/>
						</div>
						<p className='person_name'>Natalia Pogonchenko</p>
						<p className='person_position'>Business Development</p>
						<p className='person_text'>Natalia is a business development specialist of fintech projects. Many years curated fintech projects for the EmTech Investment Meeting, organized roadshows, meetings as well as conducted financial research.
						<br/>
						<br/>
						Studied corporate finance at University of Zurich and Vienna University of economics and business.</p>
						<p className='person_info_1'>E-mail: natalia@qlstrategy.ch		</p>
						<p className='person_info'>WhatsApp: 	+41795949002		</p>
						<p className='person_info'>Telegram: @amay_nataly	</p>
						<p className='person_info'>WeChat: Amay_Nataly	</p>
					</div>
					<div className='about_person6'>
						<div className='person_photo'>
							<img src={person_6} id='person_img'/>
						</div>
						<p className='person_name'>Olga Stupakova</p>
						<p className='person_position'>Digital Director</p>
						<p className='person_text'>Olga is a digital marketer with over 4 years experience with SEP and big companies: beauty, HoReCa, medicine, events, technology sector, banks, also consulting celebrities and influencers. Specializing on product funnels and creative marketing, always in search for conversions growth options. Olga successfully implemented over 70 digital-strategies with average ROMI 300%
						<br/>
						<br/>
						Studied international economy (Master), Social Media Marketing, marketing and sales in the social media at Open European Academy of Economics & Politics in Prague</p>
						<p className='person_info_1'>E-mail: oastupakova@icloud.com </p>
						<p className='person_info'>WhatsApp: +79163801939 		</p>
						<p className='person_info'>Telegram: @olga_alekseevna	</p>
						<p className='person_info'></p>
					</div>
				</div>
				<a href="#" className='person_button'>Open full text</a>

				<div className='about_partners_block'>
					<p className='partners_block_title'>Headquarters and Partners</p>
					<p className='partners_country' id='switzerland'>Switzerland</p>
					<p className='partners_country' id='bahrain'>Bahrain</p>
					<p className='partners_country' id='india'>India</p>
					<p className='partners_country' id='russia'>Russia</p>
					<div className='partners_block_map'>
						<img src={map} id='map_img'/>
						<div className='location_nav1'>
							<div className='map_location_1'>
								<img src={location} id='location_img'/>
							</div>
							<div className='location_1_info'>
									<p className='location_country'>Switzerland</p>
									<p className='country_info'>Hinterbergstrasse 49, 6312 Steinhausen</p>
							</div>
						</div>
						<div className='location_nav2'>
							<div className='map_location_2'>
								<img src={location} id='location_img'/>
							</div>
							<div className='location_2_info'>
								<p className='location_country'>Moscow, Russia </p>
								<p className='country_info'>Consectetur adipiscing elit. Ullam quis sed ut risus, id consectetur adipiscing elit. Nullam quis sed ut risus, id.</p>
							</div>
						</div>
						<div className='location_nav3'>
							<div className='map_location_3'>
								<img src={location} id='location_img'/>
							</div>
							<div className='location_3_info'>
									<p className='location_country'>Bahrain</p>
									<p className='country_info'>Office No:33, Bldg.114, Road 383, Government Avenue, Manama</p>
							</div>
						</div>
						<div className='location_nav4'>
							<div className='map_location_4'>
								<img src={location} id='location_img'/>
							</div>
							<div className='location_4_info'>
										<p className='location_country'>India</p>
										<p className='country_info'>B501 Krishna Complex, Opposite Devashish Business Park, Bodakdev, Ahmedabad, 380054</p>
							</div>
						</div>
						<div className='location_tablet'>
							<p className='location_tablet_country'>Moscow, Russia </p>
							<p className='location_tablet_info'>Consectetur adipiscing elit. Ullam quis sed ut risus, id consectetur adipiscing elit. Nullam quis sed ut risus, id.</p>
						</div>
					</div>
				</div>



			 </div>
        </div>
    )
  }


export default About;
