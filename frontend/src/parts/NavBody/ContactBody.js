import './contactbody.scss'
import Email from '../../assets/img/Email.png'
import Instagram from '../../assets/img/Instagram.png'
import Twitter from '../../assets/img/Twitter.png'
import Facebook from '../../assets/img/FacebookCropped.png'

const ContactBody = () => {
	return (
		<div className = 'contact-body'>
			<h1 className = 'header-body'>Do you have a question, comment, or concern about our services? Contact us via the following links
            </h1>

			<ul className = 'contact-bar'>
				<li className = 'list-item'>
					<a href= 'https://www.gmail.com'>
						<img src={Email}
						width='50'
						height='50'/>
					</a>
				</li>
				<li className = 'list-item'>
					<a href= 'https://www.instagram.com'>
						<img src={Instagram}
						width='50'
						height='50'/>
					</a>
				</li>
				<li className = 'list-item'>
					<a href= 'https://www.twitter.com'>
						<img src={Twitter}
						width='55'
						height='45'/>
					</a>
				</li>
				<li className = 'list-item'>
					<a href= 'https://www.facebook.com'>
						<img src={Facebook}
						width='50'
						height='50'/>
					</a>
				</li>
			</ul>
		</div>
	)
}


export default ContactBody
