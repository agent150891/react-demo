import { Theme } from '@material-ui/core/styles';
import { History, Location,  } from 'history';
import { match } from 'react-router-dom';

import { UserStore } from 'stores/UserStore/UserStore'
import { UiStore } from 'stores/UiStore/UiStore'
import{ SessionStore } from 'stores/SessionStore/SessionStore';

/**
 * The properites sent to the views by the framework when not injecting the stores
 */
export interface AppProps {
    theme?: Theme;
    classes?: any;
    history?: History;
    location?: Location;
    match?: match;
    width?: string;
}

/**
 * The dependency injection context to get the typecasting of what can be injected into a class
 */
export interface InjectionContext {
    userStore: UserStore;
    uiStore: UiStore;
    sessionStore: SessionStore;
}

/**
 * The properites sent to the views by the framework when using inject("store")
 */
export interface AppStoresProps extends AppProps {
    store: InjectionContext;
}
