/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useMemo} from "react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import { Redirect, useHistory  } from "react-router-dom";
import {useSelector} from "react-redux";
import objectPath from "object-path";
import {useHtmlClassService} from "../../_core/MetronicLayout";
import {UserProfileDropdown} from "./dropdowns/UserProfileDropdown";
import { useReactOidc } from '@axa-fr/react-oidc-context';

export function QuickUserToggler() {
  const {user} = useSelector(state => state.auth);
  const { logout, events } = useReactOidc();
  const addUserEvent = user => console.log(`********* User Loaded :${user.profile} *********`);
  const uiService = useHtmlClassService();
  const history = useHistory();

  const layoutProps = useMemo(() => {
    return {
      offcanvas: objectPath.get(uiService.config, "extras.user.layout") === "offcanvas",
    };
  }, [uiService]);

  React.useEffect(() => {
    events.addUserLoaded(addUserEvent);
    return () => {
      events.removeUserLoaded(addUserEvent);
    };
  });
  const redirectLogin = () => <Redirect to="/auth/login"/>
  return (<>
        {layoutProps.offcanvas && (<OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="quick-user-tooltip">View user</Tooltip>}
        >
          <div className="topbar-item">
            <div className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
                 id="kt_quick_user_toggle">
              <>

                <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
                <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
                  {user.full_name}
                </span>
                
                {/* <span className="symbol symbol-35 symbol-light-success">                
                    <span className="symbol-label font-size-h5 font-weight-bold">{user.title}</span>
                </span> */}
              </>
            </div>
      
            <button onClick={logout} className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
              Đăng xuất
            </button>
          </div>
        </OverlayTrigger>)}

        {!layoutProps.offcanvas && (<UserProfileDropdown/>)}
      </>
  );
}
