"use client"
import styles from './sidebar.module.css';
import React from 'react';
import { HomeOutlined, BankOutlined, AppstoreOutlined, MailOutlined, CalendarOutlined, LockOutlined, SettingOutlined, ConsoleSqlOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRouter, usePathname } from 'next/navigation';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('Home', '/home', <HomeOutlined />),
    getItem('NextjsDefault', '/default', <BankOutlined />, [
        getItem('routing', 'nextjs', null, [getItem('Linking and Navigating', '/default/linking-and-navigating')]),
        getItem('컴포넌트', '/default/components', null),
        getItem('data-fetch', '/default/d', null, [
            getItem('Fetching, Caching, and Revalidating', '/default/datafetch'),
            getItem('Server Actions and Mutations', '/default/datafetch/server-actions')])
    ]),
    getItem('Auth', 'auth', <LockOutlined />, [
        getItem('nextAuthjs', 'nextjs', null, [getItem('Login/LogOut', '/auth/nextjs/login')], 'group'),
        // getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
    getItem('X', '/X', <LockOutlined />, [
        getItem('무한스크롤', '/X/infinitescroll', null),
        getItem('좋아요등 액션버튼들', '/X/actions', null),
    ]),
    getItem('ThirdParty', '/thridparty', <CalendarOutlined />, [
        getItem('Carousel', '/thirdparty/carousel', null, [
            getItem('Embla-Carousel', '/thirdparty/carousel/embla-carousel')
        ]),
        getItem('dayjs', '/thirdparty/date', null, [
            getItem('dayjs', '/thirdparty/date/dayjs')
        ]),
        getItem('유효성검증', '/thirdparty/validation', null, [
            getItem('zod', '/thirdparty/validation/zod', null, [
                getItem('zod-with-server-action', '/thirdparty/validation/zod/with-server-action'),
                getItem('zod-no-server-action', '/thirdparty/validation/zod/no-server-action')
            ])
        ]),
        getItem('chatGPT', '/thirdparty/chatGPT', null, [
            getItem('Default', '/thirdparty/chatgpt')
        ]),
        // getItem('Option 6', '6'),
        // getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),

    { type: 'divider' },

    // getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    //     getItem('Option 9', '9'),
    //     getItem('Option 10', '10'),
    //     getItem('Option 11', '11'),
    //     getItem('Option 12', '12'),
    // ]),

    // getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];

/**
 * 메인 레이아웃의 사이드바
 * 사용 디자인 antDesign
 * @returns 
 */
export default function Sidebar() {
    const router = useRouter();

    const pathname = usePathname();
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        console.log(pathname);
        if (e.key === 'home') {
            router.replace('/')
        } else if (pathname === e.key) {

        }
        else {
            router.replace(e.key)
        }

    };



    return (
        <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
}