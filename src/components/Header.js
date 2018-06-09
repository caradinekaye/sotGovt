import React from 'react';


const Header = () => {
    return (
        <div className="header home-header navbar" role="banner">
            <div className="container">
                <div className="header-item row">
                    <div className="print-logo col-lg-8 col-xs-7">
                        <img src="/themes/dia-theme/images/print-logo.png" alt="New Zealand Government"/>
                    </div>
                    <div className="logo col-lg-8 col-xs-7">
                        <a href="/"
                           data-ga-event="click"
                           data-ga-category="Navigation"
                           data-ga-action="Header-logo"
                           data-ga-label="@attr:href"><span
                            className="logo-text">New Zealand Government | Te Kawanatanga o Aotearoa</span></a>
                    </div>
                    <div className="mobile-search">
                        <button type="button"
                                className="submit btn btn-black square-corners mobile-search-toggle
							"
                                aria-label="Show search"
                                aria-controls="header-search">
                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
                <div id="header-search" className="header-search row">
                    <div role="search" className="header-search-form home-page">
                        <form id="search-form" action="https://www.govt.nz/search" className="form-inline pull-right">
                            <div className="form-group">

                                <div className="search-controls">
                                    <input name="q" className="form-control square-corners" id="searchterm"
                                           value=""
                                           type="search" autoCapitalize="off" autoComplete="off" autoCorrect="off"/>
                                    <label htmlFor="searchterm" className="search-label entered">
                                        Search
                                        Govt.nz
                                    </label>
                                    <button type="submit" className="submit btn btn-orange square-corners"
                                            aria-label="Search Govt.nz"><span className="glyphicon glyphicon-search"
                                                                              aria-hidden="true"></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;