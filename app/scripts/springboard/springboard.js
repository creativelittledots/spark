/*!---------------------------------------------------------------------------*\
    SpringBoard

    - Version:      0.9.9
    - Author:       Creative Little Dots
    - Site:         http://creativelittle.uk/springboard
    - Copyright:    2018, Creative Little Dots
    – License:      MIT | http://goo.gl/p3bexl
\*----------------------------------------------------------------------------*/

/* Imports */

import Core     from './modules/core';
import Fetcher  from './modules/fetcher';
import Modals   from './modules/modals';
import Tabs     from './modules/tabs';
import Toggler  from './modules/toggler';


/* SpringBoard */

window.SpringBoard = function(options) {

    // Private: Default settings object
    const _defaults = {
        core: {},
        fetcher: {},
        modals: {},
        tabs: {},
        toggler: {}
    };

    // Private: Merge passed in object with defaults
    const _settings = {
        ..._defaults,
        ...options
    };

    const _modules = {};

    // Public: Destroy module instance
    const destroy = () => {

        _modules.core.destroy();
        _modules.fetcher.destroy();
        _modules.modals.destroy();
        _modules.tabs.destroy();
        _modules.toggler.destroy();
    };

    // Public: Destroy module instance and run initialise again
    const reinit = () => {

        destroy();
        init();
    };

    // Public: Initialise module
    const init = (() => {

        _modules.core     = new Core(_settings.core);
        _modules.fetcher  = new Core(_settings.fetcher);
        _modules.modals   = new Modals(_settings.modals);
        _modules.tabs     = new Tabs(_settings.tabs);
        _modules.toggler  = new Tabs(_settings.toggler);
    })();

    return {
        destroy,
        reinit,
        init
    }
};

