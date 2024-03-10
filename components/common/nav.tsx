import { AppShell, Burger, Group, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../../styles/components/nav.module.css';
import React from 'react';

export default function Navbar({children}: {children: React.ReactNode}) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                            <circle cx="15" cy="15" r="15" fill="#6e9bc7" />
                        </svg>
                        <Group ml="xl" gap={0} visibleFrom="sm">
                            <UnstyledButton className={classes.control}>Home</UnstyledButton>
                            <UnstyledButton className={classes.control}>Blog</UnstyledButton>
                            <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
                            <UnstyledButton className={classes.control}>Support</UnstyledButton>
                        </Group>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
                <UnstyledButton className={classes.control}>Home</UnstyledButton>
                <UnstyledButton className={classes.control}>Blog</UnstyledButton>
                <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
                <UnstyledButton className={classes.control}>Support</UnstyledButton>
            </AppShell.Navbar>

            <AppShell.Main component="main">
                {children}
            </AppShell.Main>
        </AppShell>
    );
}