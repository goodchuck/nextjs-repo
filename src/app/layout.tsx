import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MSWComponent } from './_component/MSWComponent'
import AuthSession from './_component/AuthSession'
import Sidebar from './_component/Sidebar'
import styles from './layout.module.css'
import { AntdRegistry } from '@ant-design/nextjs-registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <MSWComponent />
        <AuthSession>

          <h1>next.js의 여러 기능들을 테스트를 하는 곳이며 나중에 다시 재사용 하기위한 저장소</h1>
          <div className={styles['bodyWrapper']}>
            <Sidebar />
            <AntdRegistry>
              <div className={styles['mainContainer']}>{children}</div>
            </AntdRegistry>
          </div>

        </AuthSession>

      </body>
    </html>
  )
}
