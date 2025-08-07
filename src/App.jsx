import { useState } from 'react';
import './App.css';
import { Badge } from './components/badge/index.jsx';
import { Banner } from './components/banner/index.jsx';
import { Card } from './components/card/Card.jsx';
import { HiMiniCloud } from 'react-icons/hi2';

function App() {
	return (
		<>
			<div className='example-row'>
				<Badge color='gray' variant='square'>
					Gray square
				</Badge>
				<Badge color='red' variant='square'>
					Red square
				</Badge>
				<Badge color='yellow' variant='square'>
					Yellow square
				</Badge>
				<Badge color='green' variant='square'>
					Green square
				</Badge>
				<Badge color='blue' variant='square'>
					Blue square
				</Badge>
				<Badge color='indigo' variant='square'>
					Indigo square
				</Badge>
				<Badge color='purple' variant='square'>
					Purple square
				</Badge>
				<Badge color='pink' variant='square'>
					Pink square
				</Badge>

				<Badge color='gray' variant='pill'>
					Gray pill
				</Badge>
				<Badge color='red' variant='pill'>
					Red pill
				</Badge>
				<Badge color='yellow' variant='pill'>
					Yellow pill
				</Badge>
				<Badge color='green' variant='pill'>
					Green pill
				</Badge>
				<Badge color='blue' variant='pill'>
					Blue pill
				</Badge>
				<Badge color='indigo' variant='pill'>
					Indigo pill
				</Badge>
				<Badge color='purple' variant='pill'>
					Purple pill
				</Badge>
				<Badge color='pink' variant='pill'>
					Pink pill
				</Badge>
			</div>
			<div className='example-column'>
				<Banner status='success'>
					<Banner.Text>
						<Banner.Title>Congratulations!</Banner.Title>
						<Banner.Description>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
							pariatur, ipsum similique veniam.
						</Banner.Description>
					</Banner.Text>
				</Banner>
				<Banner status='warning'>
					<Banner.Text>
						<Banner.Title>Attention</Banner.Title>
						<Banner.Description>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
							pariatur, ipsum similique veniam.
						</Banner.Description>
					</Banner.Text>
				</Banner>
				<Banner status='error'>
					<Banner.Text>
						<Banner.Title>
							There is a problem with your application
						</Banner.Title>
						<Banner.Description>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
							pariatur, ipsum similique veniam.
						</Banner.Description>
					</Banner.Text>
				</Banner>
				<Banner status='info'>
					<Banner.Text>
						<Banner.Title>Update available</Banner.Title>
						<Banner.Description>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
							pariatur, ipsum similique veniam. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Aliquid pariatur, ipsum similique
							veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Aliquid pariatur, ipsum similique veniam. Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Aliquid pariatur, ipsum
							similique veniam.
						</Banner.Description>
					</Banner.Text>
				</Banner>
				<Banner status='success'>
					<Banner.Text>
						<Banner.Title>Congratulations!</Banner.Title>
					</Banner.Text>
				</Banner>
				<Banner status='warning'>
					<Banner.Text>
						<Banner.Title>Attention</Banner.Title>
					</Banner.Text>
				</Banner>
				<Banner status='error'>
					<Banner.Text>
						<Banner.Title>
							There is a problem with your application
						</Banner.Title>
					</Banner.Text>
				</Banner>
				<Banner status='info'>
					<Banner.Text>
						<Banner.Title>Update available</Banner.Title>
					</Banner.Text>
				</Banner>
				<Banner>
					<Banner.Text>
						<Banner.Title>not defined</Banner.Title>
					</Banner.Text>
				</Banner>
			</div>
			<div className='example-row'>
				<Card
					width='lg'
					height='auto'
					icon=<HiMiniCloud />
					title='Easy Deployment'
					text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'
				/>
				<Card
					width='sm'
					height='md'
					title='Easy Deployment'
					text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. '
				/>
			</div>
		</>
	);
}

export default App;
