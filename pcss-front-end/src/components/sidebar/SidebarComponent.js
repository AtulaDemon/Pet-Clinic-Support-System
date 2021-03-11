import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import VNLABELS from 'resources/vnlabels'
import {
    IconAgents,
    IconContacts,
    IconLogout,
    IconOverview,
    IconSubscription} from 'assets/icons';
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
                title={VNLABELS.LABEL_COMMON_PRODUCT}
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.productList}
                    title={VNLABELS.LABEL_INVENTORY_PRODUCT_LIST}
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.productList)}
                />
                <MenuItem
                    id={SLUGS.addNewProduct}
                    title={VNLABELS.LABEL_INVENTORY_ADD_NEW_PRODUCT}
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.addNewProduct)}
                />
                 <MenuItem
                    id={SLUGS.createWarehouseEntry}
                    title={VNLABELS.LABEL_INVENTORY_CREATE_INVENTORY_ENTRY_FORM}
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.createWarehouseEntry)}
                />
            </MenuItem>

            <MenuItem
                id={SLUGS.salesInvoice}
                items={[SLUGS.salesInvoiceList, SLUGS.createSalesInvoice]}
                title={VNLABELS.LABEL_COMMON_SALES_INVOICE}
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.salesInvoiceList}
                    title={VNLABELS.LABEL_SI_SALES_INVOICE_LIST}
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.salesInvoiceList)}
                />
                <MenuItem
                    id={SLUGS.createSalesInvoice}
                    title={VNLABELS.LABEL_SI_CREATE_SALES_INVOICE}
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.createSalesInvoice)}
                />
            </MenuItem>

            <MenuItem
                id={SLUGS.serviceCatalog}
                items={[SLUGS.serviceList, SLUGS.createNewService]}
                title={VNLABELS.LABEL_COMMON_SERVICE_CATALOG}
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.serviceList}
                    title={VNLABELS.LABEL_SC_SERVICE_LIST}
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.serviceList)}
                />
                <MenuItem
                    id={SLUGS.createNewService}
                    title={VNLABELS.LABEL_SC_CREATE_NEW_SERVICE}
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.createNewService)}
                />
            </MenuItem>

            <MenuItem
                id={SLUGS.serviceOrder}
                items={[SLUGS.createServiceOrder, SLUGS.medicalRecord, SLUGS.serviceHistory,
                     SLUGS.pendingService, SLUGS.serviceSchedule]}
                title={VNLABELS.LABEL_COMMON_SERVICE_ORDER}
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.createServiceOrder}
                    title={VNLABELS.LABEL_SO_CREATE_SERVICE_ORDER}
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.createServiceOrder)}
                />
                <MenuItem
                    id={SLUGS.medicalRecord}
                    title={VNLABELS.LABEL_SO_MEDICAL_RECORD}
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.medicalRecord)}
                />
                <MenuItem
                    id={SLUGS.serviceHistory}
                    title={VNLABELS.LABEL_SO_SERVICE_HISTORY}
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.serviceHistory)}
                />
                <MenuItem
                    id={SLUGS.pendingService}
                    title={VNLABELS.LABEL_SO_PENDING_SERVICE}
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.pendingService)}
                />
                <MenuItem
                    id={SLUGS.serviceSchedule}
                    title={VNLABELS.LABEL_SO_SERVICE_SCHEDULE}
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.serviceSchedule)}
                />
            </MenuItem>

            <MenuItem
                id={SLUGS.customer}
                items={[SLUGS.customerList, SLUGS.createCustomerAccount]}
                title={VNLABELS.LABEL_COMMON_CUSTOMER}
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.customerList}
                    title={VNLABELS.LABEL_CUSTOMER_CUSTOMER_LIST}
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.customerList)}
                />
                <MenuItem
                    id={SLUGS.createCustomerAccount}
                    title={VNLABELS.LABEL_CUSTOMER_CREATE_CUSTOMER_ACCOUNT}
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.createCustomerAccount)}
                />
            </MenuItem>

            <MenuItem
                id={SLUGS.humanResources}
                items={[SLUGS.employeeList, SLUGS.addNewEmployee]}
                title={VNLABELS.LABEL_COMMON_HUMAN_RESOURCES}
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.employeeList}
                    title={VNLABELS.LABEL_HR_EMPLOYEE_LIST}
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.employeeList)}
                />
                <MenuItem
                    id={SLUGS.addNewEmployee}
                    title={VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE}
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.addNewEmployee)}
                />
            </MenuItem>

            <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} />
        </Menu>
    );
}

export default SidebarComponent;
