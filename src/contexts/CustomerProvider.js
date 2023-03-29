import React, {useContext, useEffect, useReducer} from "react";
import {CustomerContext} from "./General";
import {UserContext} from "starh-comp-auth";
import {customerDefaultState, customerEvents, customerReducer} from "../pages/customer/CustomerReducer";
import {useCustomerDefaults} from "../hooks/useCustomerDefaults";
import PropTypes from "prop-types";

export const CustomerProvider = (props) => {
    const [customerState, customerDispatch] = useReducer(customerReducer, customerDefaultState);
    const {user} = useContext(UserContext)
    const {
        DEFAULT_DATE_FORMAT,
        DEFAULT_COORDINATES_FORMAT,
        DEFAULT_FLEET_LIMIT,
        DEFAULT_FLEET_DOCUMENT_TOTAL_SPACE_LIMIT,
        DEFAULT_FLEET_IMAGE_TOTAL_SPACE_LIMIT,
        DEFAULT_XTL_PORT_MIN,
        DEFAULT_XTL_PORT_MAX,
        DEFAULT_XTL_PORT_DEFAULT,
        DEFAULT_XTL_STARBOARD_MIN,
        DEFAULT_XTL_STARBOARD_MAX,
        DEFAULT_XTL_STARBOARD_DEFAULT,
        DEFAULT_SAIL_FORMAT,
        DEFAULT_VESSEL_POSITION_TIMESTAMP_THRESHOLD,
        DEFAULT_MAP_UPDATE_FREQUENCY,
        DEFAULT_PLANNING_SPEED,
        DEFAULT_PLANNING_MIN_SPEED,
        DEFAULT_PLANNING_MAX_SPEED,
        // DEFAULT_VOYAGE_MODE,
        DEFAULT_SMARTLOG_PUBLISH_ON_SAVE,
        DEFAULT_HOME_PREFERENCE,
        DEFAULT_CONSUMPTION_LIMIT
    } = useCustomerDefaults()

    useEffect(() => {
        let payload = {
            fleetLimit:                       user.tenantMeta?.settings?.fleetLimit                ? user.tenantMeta?.settings?.fleetLimit                : DEFAULT_FLEET_LIMIT,
            fleetTotalDocumentSize:           user.tenantMeta?.settings?.fleetTotalDocumentSize    ? user.tenantMeta?.settings?.fleetTotalDocumentSize    : DEFAULT_FLEET_DOCUMENT_TOTAL_SPACE_LIMIT,
            fleetTotalImageSize:              user.tenantMeta?.settings?.fleetTotalImageSize       ? user.tenantMeta?.settings?.fleetTotalImageSize       : DEFAULT_FLEET_IMAGE_TOTAL_SPACE_LIMIT,
            fleetCurrentDocumentSize:         user.tenantMeta?.settings?.fleetCurrentDocumentSize  ? user.tenantMeta?.settings?.fleetCurrentDocumentSize  : 0,
            fleetCurrentImageSize:            user.tenantMeta?.settings?.fleetCurrentImageSize     ? user.tenantMeta?.settings?.fleetCurrentImageSize     : 0,
            xtlPortMin:                       user.tenantMeta?.settings?.xtlPortMin                ? user.tenantMeta?.settings?.xtlPortMin                : DEFAULT_XTL_PORT_MIN,
            xtlPortMax:                       user.tenantMeta?.settings?.xtlPortMax                ? user.tenantMeta?.settings?.xtlPortMax                : DEFAULT_XTL_PORT_MAX,
            xtlStarboardMin:                  user.tenantMeta?.settings?.xtlStarboardMin           ? user.tenantMeta?.settings?.xtlStarboardMin           : DEFAULT_XTL_STARBOARD_MIN,
            xtlStarboardMax:                  user.tenantMeta?.settings?.xtlStarboardMax           ? user.tenantMeta?.settings?.xtlStarboardMax           : DEFAULT_XTL_STARBOARD_MAX,
            dateFormat:                       user.meta?.settings?.dateFormat                      ? user.meta?.settings?.dateFormat                      : (user.tenantMeta?.settings?.dateFormat                       ? user.tenantMeta?.settings?.dateFormat                       : DEFAULT_DATE_FORMAT),
            coordinatesFormat:                user.meta?.settings?.coordinatesFormat               ? user.meta?.settings?.coordinatesFormat               : (user.tenantMeta?.settings?.coordinatesFormat                ? user.tenantMeta?.settings?.coordinatesFormat                : DEFAULT_COORDINATES_FORMAT),
            xtlPortDefault:                   user.meta.settings?.xtlPortDefault                   ? user.meta.settings?.xtlPortDefault                   : (user.tenantMeta?.settings?.xtlPortDefault                   ? user.tenantMeta?.settings?.xtlPortDefault                   : DEFAULT_XTL_PORT_DEFAULT),
            xtlStarboardDefault:              user.meta.settings?.xtlStarboardDefault              ? user.meta.settings?.xtlStarboardDefault              : (user.tenantMeta?.settings?.xtlStarboardDefault              ? user.tenantMeta?.settings?.xtlStarboardDefault              : DEFAULT_XTL_STARBOARD_DEFAULT),
            sailFormat:                       user.meta.settings?.sailFormat                       ? user.meta.settings?.sailFormat                       : (user.tenantMeta?.settings?.sailFormat                       ? user.tenantMeta?.settings?.sailFormat                       : DEFAULT_SAIL_FORMAT),
            vesselPositionTimestampThreshold: user.meta.settings?.vesselPositionTimestampThreshold ? user.meta.settings?.vesselPositionTimestampThreshold : (user.tenantMeta?.settings?.vesselPositionTimestampThreshold ? user.tenantMeta?.settings?.vesselPositionTimestampThreshold : DEFAULT_VESSEL_POSITION_TIMESTAMP_THRESHOLD),
            mapUpdateFrequency:               user.meta?.settings?.mapUpdateFrequency              ? user.meta?.settings?.mapUpdateFrequency              : (user.tenantMeta?.settings?.mapUpdateFrequency               ? user.tenantMeta?.settings?.mapUpdateFrequency               : DEFAULT_MAP_UPDATE_FREQUENCY),
            vesselMonitorUpdateFrequency:     user.meta?.settings?.mapUpdateFrequency              ? user.meta?.settings?.mapUpdateFrequency              : (user.tenantMeta?.settings?.mapUpdateFrequency               ? user.tenantMeta?.settings?.mapUpdateFrequency               : DEFAULT_MAP_UPDATE_FREQUENCY),
            defaultVoyageMode:                user.tenantMeta?.settings?.defaultVoyageMode ,
            planningMaxSpeed:                 user.tenantMeta?.settings?.planningMaxSpeed          ? user.tenantMeta?.settings?.planningMaxSpeed          : DEFAULT_PLANNING_MAX_SPEED,
            planningMinSpeed:                 user.tenantMeta?.settings?.planningMinSpeed          ? user.tenantMeta?.settings?.planningMinSpeed          : DEFAULT_PLANNING_MIN_SPEED,
            planningDefaultSpeed:             user.meta.settings?.planningDefaultSpeed             ? user.meta.settings?.planningDefaultSpeed             : (user.tenantMeta?.settings?.planningDefaultSpeed             ? user.tenantMeta?.settings?.planningDefaultSpeed             : DEFAULT_PLANNING_SPEED),
            smartlogPublishOnSave:            user.tenantMeta?.settings?.smartlogPublishOnSave     ? user.tenantMeta?.settings?.smartlogPublishOnSave     : DEFAULT_SMARTLOG_PUBLISH_ON_SAVE,
            geoServerUrl:                     user.tenantMeta?.settings?.geoServerUrl,
            homePreference:                   user.meta?.settings?.homePreference                  ? user.meta?.settings?.homePreference                  : (user.tenantMeta?.settings?.homePreference                   ? user.tenantMeta?.settings?.homePreference                   : DEFAULT_HOME_PREFERENCE),
            logoId:                           user.tenantMeta?.settings?.logoId                    ? user.tenantMeta?.settings?.logoId                    : null,
            geoserverCacheUrl:                user.tenantMeta?.settings?.geoserverCacheUrl,
            geoserverWorkspace:               user.tenantMeta?.settings?.geoserverWorkspace,
            cndUrl:                           user.tenantMeta?.settings?.cndUrl,
            planningSogThreshold:             user.tenantMeta?.settings?.planningSogThreshold,
            planningHoursThreshold:           user.tenantMeta?.settings?.planningHoursThreshold,
            planningVoyageWFEnabled:          user.tenantMeta?.settings?.planningVoyageWFEnabled,
            defaultMapVesselBgColor:          user.tenantMeta?.settings?.defaultMapVesselBgColor ?   user.tenantMeta?.settings?.defaultMapVesselBgColor   : "#FFFFFF",
            defaultMapVesselTextColor:        user.tenantMeta?.settings?.defaultMapVesselTextColor ? user.tenantMeta?.settings?.defaultMapVesselTextColor : "#000000",
            smartlogDefaultMails:             user.tenantMeta?.settings?.smartlogDefaultMails ?      user.tenantMeta?.settings?.smartlogDefaultMails      : [],
            enabledSources:                   user.tenantMeta?.settings.enabledSources ?             user.tenantMeta?.settings.enabledSources             : [],
            enabledTypes:                     user.tenantMeta?.settings.enabledTypes ?               user.tenantMeta?.settings.enabledTypes                 : [],
            consumptionLimit:                 user.tenantMeta?.settings?.consumptionLimit ?          user.tenantMeta?.settings?.consumptionLimit          : DEFAULT_CONSUMPTION_LIMIT,
            speedKnotsThreshold:              user.tenantMeta?.settings?.speedKnotsThreshold,
            speedKnotsTolerance:              user.tenantMeta?.settings?.speedKnotsTolerance,
            reportsCount:                     user.tenantMeta?.settings?.reportsCount,
            toleranceDate:                   user.tenantMeta?.settings?.toleranceDate,
        }
        customerDispatch({type: customerEvents.LOGIN, payload: payload})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <CustomerContext.Provider value={{customerState: customerState, customerDispatch: customerDispatch}}>{props.children}</CustomerContext.Provider>
}

CustomerProvider.propTypes = {
    children: PropTypes.node
}
