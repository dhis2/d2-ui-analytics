import React from 'react'
import PropTypes from 'prop-types'
import i18n from '@dhis2/d2-i18n'
import { SingleSelectOption, SingleSelectField } from '@dhis2/ui-core'

import { getRelativePeriodsOptions } from './utils/RelativePeriodsGenerator'
import styles from './styles/PeriodFilter.style'

const RelativePeriodFilter = ({ currentFilter, selectFilter }) => (
    <div className="leftSection">
        <SingleSelectField
            label={i18n.t('Period type')}
            onChange={({ selected }) => selectFilter(selected)}
            dense
            selected={currentFilter}
            className="filterElement"
        >
            {getRelativePeriodsOptions().map(option => (
                <SingleSelectOption
                    key={option.id}
                    value={option.id}
                    label={option.getName()}
                />
            ))}
        </SingleSelectField>
        <style jsx>{styles}</style>
    </div>
)

RelativePeriodFilter.propTypes = {
    currentFilter: PropTypes.object.isRequired,
    selectFilter: PropTypes.func.isRequired,
}

export default RelativePeriodFilter