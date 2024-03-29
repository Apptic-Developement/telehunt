'use client';
import { ActionIcon, Button, Popover, Text, useMantineColorScheme } from '@mantine/core';
import { useMemo } from 'react'
import {  IconMoon, IconSun, IconDeviceDesktop, IconMoonStars } from '@tabler/icons-react';
import styles from './header.module.css';

type ThemeType = {
    name: 'light' | 'dark' | 'auto',
    icon: typeof IconSun
}
export const ThemeToggle = () => {
    const { colorScheme, setColorScheme, clearColorScheme } = useMantineColorScheme();
    const themes = useMemo<ThemeType[]>(() => ([
        {
            name: 'light',
            icon: IconSun,
        },
        {
            name: 'dark',
            icon: IconMoonStars,
        },
        {
            name: 'auto',
            icon: IconDeviceDesktop,
        },
    ]), [colorScheme])
    const getDisplayIcon = () => {
        if (colorScheme === 'auto') return <IconDeviceDesktop />
        if (colorScheme === 'dark') return <IconMoon />
        if (colorScheme === 'light') return <IconSun />

 
    }
    return (

        <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
                <ActionIcon variant="subtle" aria-label="Settings">
                    {getDisplayIcon()}
                </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown
            >
                {themes && themes.map(({ name, icon: Icon }) => {
                    return (
                        <Button
                            key={name}
                            onClick={() => setColorScheme(name)}
                            classNames={{
                                root: styles.themeToggleButtonRoot
                            }}
                            variant='subtle'>
                            <Icon className={styles.themeToggleButtonIcon} style={{ width: '1.5rem', height: '1.5rem' }} stroke={1.5} />
                            <Text style={{ textTransform: 'capitalize' }} display='inline-block' size='sm' fw={600} component='span'>{name}</Text>
                        </Button>
                    )
                })}

            </Popover.Dropdown>
        </Popover>
    )
}

