import React from "react"
import { array } from "prop-types"
import Styled from "styled-components"
import { AccordianItem, AccordianHeader, AccordianContent } from "./"

const AccordianStyle = Styled.div`

`

export const Accordian = ({ className, content }) => {
    const accordian = content.map((item, index) => {
        return (
            <AccordianItem key={index}>
                <AccordianHeader>{item.header}</AccordianHeader>
                <AccordianContent>{item.content}</AccordianContent>
            </AccordianItem>
        )
    })
    return <AccordianStyle className={className}>{accordian}</AccordianStyle>
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any
Accordian.propTypes = {
    content: array.isRequired
}

Accordian.defaultProps = {}
