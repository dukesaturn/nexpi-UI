"use client";
import Separator from "./Separator";
import Typography from "./Typography"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";
import Link from "next/link";
import React from 'react';


interface NavItem {
    name: string;
    icon?: string;
    path: string;
    subItems?: NavItem[];
}

interface PaginationProps {
    NavItems: NavItem[];
}


const Pagination = ({ NavItems }: PaginationProps) => {
    const pathName = usePathname()
    const [previous, setPrevious] = useState<NavItem>();
    const [next, setNext] = useState<NavItem>();

    useEffect(() => {
        const i = NavItems.findIndex((elem: NavItem) => elem.path === pathName)
        setPrevious(i !== 0 ? NavItems[i - 1] : undefined)
        setNext(i !== NavItems.length ? NavItems[i + 1] : undefined)
    }, [])


    return (
        <div style={{ marginTop: '4rem' }}>
            <div>
                <Separator />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {previous && previous.name ?
                        <>
                            <Typography type="light" style={{ fontSize: '13px', marginBottom : '-2px'  }}>Previus</Typography>
                            <Link style={{ fontSize: '18px ', color: 'var(--nxp-primary-color)', textDecoration: 'none' }} href={previous.path}>
                                <b>{previous.name}</b>
                            </Link> </> : null}

                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {next && next.name ?
                        <>
                            <Typography type="light" style={{ fontSize: '13px', marginBottom : '-2px' }}>Next</Typography>
                            <Link style={{ fontSize: '18px', color: 'var(--nxp-primary-color)', textDecoration: 'none' }} href={next.path}>
                                <b>{next.name}</b>
                                </Link> </> : null}

                </div>
            </div>
        </div>
    )
}

export default Pagination;