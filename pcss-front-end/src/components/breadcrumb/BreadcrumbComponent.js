import React, { useContext } from 'react';
import { string } from 'prop-types';
import { SidebarContext } from 'hooks/useSidebar';
import { Breadcrumbs, Link, makeStyles } from '@material-ui/core';  
import VNBREADCRUMB from 'resources/vnbreadcrumbs';
import { convertUrlToBreadcrumbLink } from 'resources/utilities';

const useStyles = makeStyles({
    root: {
    },
    margin: {
        marginTop: '60px',
    }
});

function BreadcrumbComponent() {
    const classes = useStyles();
    const { currentItem } = useContext(SidebarContext);
    let breadcrumb = currentItem;


    return (
        !breadcrumb.includes('dashboard') ?
        <Breadcrumbs aria-label='breadcrumb' className={classes.margin}>
            <Link color='inherit' href='/dashboard'>
                Home
            </Link>
            <Link color='inherit' href='#'>
                Pages
            </Link>
            <Link color='textPrimary' href={breadcrumb} aria-current='page'>
                {convertUrlToBreadcrumbLink(breadcrumb, VNBREADCRUMB)}
            </Link>
        </Breadcrumbs> : <div></div>
            
 );
};

BreadcrumbComponent.propTypes = {
    breadcrumb: string
};

export default BreadcrumbComponent;
