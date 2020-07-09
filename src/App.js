import React, {useEffect} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {AppTheme, lightTheme} from '@datorama/app-components';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import sdk from '@datorama/sdk';
import Install from "./component/Install";
import Run from "./component/Run";
import store from './redux/store';
import {saveSession} from "./redux/actions/session.actions";
import {isEmpty} from "lodash";

// pages


const App = () => {
    const dispatch = useDispatch();
    const session = useSelector(state => state.session);

    useEffect(() => {
        sdk.init();
        sdk.app.onLoad().then(serverSession => {
            dispatch(saveSession(serverSession));
            console.log(serverSession);
        });
    }, []);

    if (isEmpty(session)) {
        return null;
    }

    return (
        <AppTheme theme={lightTheme} provider={ThemeProvider}>
            <Router>
                <Container>
                    <Switch>
                        <Route exact path="/install"><Install/></Route>
                        <Route exact path="/run"><Run/></Route>
                        <Route exact path="*">{() => <h1>Not found</h1>}</Route>
                    </Switch>
                </Container>
            </Router>
        </AppTheme>
    );
};

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
};


export default AppWrapper;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #444;
`;
