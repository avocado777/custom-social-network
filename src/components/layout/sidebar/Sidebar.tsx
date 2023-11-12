import { MessagesSquare, Phone, Settings, SunDim, Users2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Sidebar.module.scss'

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<Image src='/logo.svg' priority alt='' width={40} height={40} />
			<div>
				<Link href='/friends'>
					<Users2 />
				</Link>
				<Link href='/call'>
					<Phone />
				</Link>
				<Link href='/chats'>
					<MessagesSquare />
				</Link>
				<Link href='/settings'>
					<Settings />
				</Link>
			</div>
			<SunDim />
		</aside>
	)
}
