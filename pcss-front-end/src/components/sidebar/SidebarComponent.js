import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconOverview,
    IconSettings,
    IconSubscription,
    IconTickets
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.dashboard}
                title='Dashboard'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.dashboard)}
            />
            <MenuItem
                id={SLUGS.product}
                items={[SLUGS.productList, SLUGS.addNewProduct, SLUGS.createWarehouseEntry]}
                title='Sản phẩm'
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.productList}
                    title='Danh sách sản phẩm'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.productList)}
                />
                <MenuItem
                    id={SLUGS.addNewProduct}
                    title='Thêm sản phẩm mới'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.addNewProduct)}
                />
                 <MenuItem
                    id={SLUGS.createWarehouseEntry}
                    title='Tạo phiếu nhập kho'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.createWarehouseEntry)}
                />
            </MenuItem>
            <MenuItem
                id={SLUGS.salesInvoice}
                items={[SLUGS.salesInvoiceList, SLUGS.createSalesInvoice]}
                title='Hóa đơn bán hàng'
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.salesInvoiceList}
                    title='Danh sách HĐBH'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.salesInvoiceList)}
                />
                <MenuItem
                    id={SLUGS.createSalesInvoice}
                    title='Tạo HĐBH'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.createSalesInvoice)}
                />
            </MenuItem>

            <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} />
        </Menu>
    );
}

export default SidebarComponent;
