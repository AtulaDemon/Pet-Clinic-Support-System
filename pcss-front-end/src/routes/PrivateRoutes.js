import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';
import ProductListView from 'pages/inventory/ProductListView/index';
import AddProductView from 'pages/inventory/AddProduct/index';

import CustomerListView from 'pages/customer/CustomerListView/index';
import CreateNewServiceOrder from 'pages/serviceOrder/CreateNewServiceOrder/index';
import ProductDetailsView from 'pages/inventory/ProductDetailView/index';
import SalesInvoiceList from 'pages/salesInvoice/SalesInvoiceListView/index';
import CreateSalesInvoice from 'pages/salesInvoice/CreateSalesInvoiceView/index';
import SalesInvoiceDetail from 'pages/salesInvoice/SalesInvoiceDetailView/index';
import EditProductView from 'pages/inventory/EditProduct/index';
import InventoryEntryForm from 'pages/inventory/CreateWarehouseEntry/index';

const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.createWarehouseEntry} render={() => <InventoryEntryForm />}/>
                <Route exact path={SLUGS.addNewProduct} render={() => <AddProductView />} />
                <Route exact path={SLUGS.productList} render={() => <ProductListView />} />
                <Route exact path={SLUGS.product} render={() => <ProductListView />} />
                <Route exact path={SLUGS.productDetail} render={() => <ProductDetailsView />} />
                <Route exact path={SLUGS.editProduct} render={() => <EditProductView />} />

                <Route exact path={SLUGS.salesInvoice} render={() => <SalesInvoiceList />} />
                <Route exact path={SLUGS.salesInvoiceList} render={() => <SalesInvoiceList />} />
                <Route exact path={SLUGS.createSalesInvoice} render={() => <CreateSalesInvoice />} />
                <Route exact path={SLUGS.salesInvoiceDetail} render={() => <SalesInvoiceDetail />} />

                <Route exact path={SLUGS.serviceCatalog} render={() => <div>serviceList</div>} />
                <Route exact path={SLUGS.serviceList} render={() => <div>serviceList</div>} />
                <Route exact path={SLUGS.createNewService} render={() => <div>createNewService</div>} />

                <Route exact path={SLUGS.serviceOrder} render={() => <div>pendingService</div>} />
                <Route exact path={SLUGS.createServiceOrder} render={() => <CreateNewServiceOrder/>} />
                <Route exact path={SLUGS.medicalRecord} render={() => <div>medicalRecord</div>} />
                <Route exact path={SLUGS.serviceHistory} render={() => <div>serviceHistory</div>} />
                <Route exact path={SLUGS.pendingService} render={() => <div>pendingService</div>} />
                <Route exact path={SLUGS.serviceSchedule} render={() => <div>serviceSchedule</div>} />

                <Route exact path={SLUGS.customer} render={() => <div>customer</div>}/>
                <Route exact path={SLUGS.customerList} render={() => <CustomerListView/> } />
                <Route exact path={SLUGS.createCustomerAccount} render={() => <div>createCustomerAccount</div>} />
                
                <Route exact path={SLUGS.humanResources} render={() => <div>employeeList</div>} />
                <Route exact path={SLUGS.employeeList} render={() => <div>employeeList</div>} />
                <Route exact path={SLUGS.addNewEmployee} render={() => <div>addNewEmployee</div>} />
                
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
