import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';
import ProductListView from 'pages/inventory/ProductListView/index';
import AddProductView from 'pages/inventory/AddProduct/index';
import ProductDetailsView from 'pages/inventory/ProductDetailView/index';
import SalesInvoiceList from 'pages/salesInvoice/salesInvoiceListView/index';
import CreateSalesInvoice from 'pages/salesInvoice/createSalesInvoiceView/index';

import EmployeeDetailView from 'pages/human-resources/EmployeeDetailView/index';
import AddNewEmployeeView from 'pages/human-resources/AddNewEmployeeView/index';
import EmployeeListView from 'pages/human-resources/EmployeeListView/index';
import CustomerListView from 'pages/customer/CustomerListView/index';
import CreateNewService from 'pages/service/CreateNewService/index';
import CustomerDetailComponent from 'pages/customer/CustomerDetailView/index';
import EditEmployeeDetail from 'pages/human-resources/EditEmployeeDetail/index';
import CreateCustomerAccount from 'pages/customer/CreateCustomerView/index';
const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.createWarehouseEntry} render={() => <div>createWarehouseEntry</div> }/>
                <Route exact path={SLUGS.addNewProduct} render={() => <AddProductView />} />
                <Route exact path={SLUGS.productList} render={() => <ProductListView />} />
                <Route exact path={SLUGS.product} render={() => <ProductListView />} />
                <Route exact path={SLUGS.productDetail} render={() => <ProductDetailsView />} />

                <Route exact path={SLUGS.salesInvoice} render={() => <SalesInvoiceList />} />
                <Route exact path={SLUGS.salesInvoiceList} render={() => <SalesInvoiceList />} />
                <Route exact path={SLUGS.createSalesInvoice} render={() => <CreateSalesInvoice />} />

                <Route exact path={SLUGS.serviceCatalog} render={() => <div>serviceList</div>} />
                <Route exact path={SLUGS.serviceList} render={() => <div>serviceList</div>} />
                <Route exact path={SLUGS.createNewService} render={() => <CreateNewService/>} />

                <Route exact path={SLUGS.serviceOrder} render={() => <div>pendingService</div>} />
                <Route exact path={SLUGS.createServiceOrder} render={() => <div>createServiceOrder</div>} />
                <Route exact path={SLUGS.medicalRecord} render={() => <div>medicalRecord</div>} />
                <Route exact path={SLUGS.serviceHistory} render={() => <div>serviceHistory</div>} />
                <Route exact path={SLUGS.pendingService} render={() => <div>pendingService</div>} />
                <Route exact path={SLUGS.serviceSchedule} render={() => <div>serviceSchedule</div>} />

                <Route exact path={SLUGS.customer} render={() => <CustomerListView/> }/>
                <Route exact path={SLUGS.customerList} render={() => <CustomerListView/> } />
                <Route exact path={SLUGS.customerDetail} render={() => <CustomerDetailComponent/> } />
                <Route exact path={SLUGS.createCustomerAccount} render={() => <CreateCustomerAccount/>} />
                
                <Route exact path={SLUGS.humanResources} render={() => <div><EmployeeListView/></div>} />
                <Route exact path={SLUGS.employeeList} render={() => <div><EmployeeListView/></div>} />
                <Route exact path={SLUGS.addNewEmployee} render={() => <AddNewEmployeeView/>} />
                <Route exact path={SLUGS.employeeDetail} render={() => <EmployeeDetailView/>} />
                <Route exact path={SLUGS.editEmployee} render={() => <EditEmployeeDetail/>} />
                
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
