import React from 'react'

interface ContainerProps {
    children: any
    className?: string
}

const Container = ({ children, className }: ContainerProps) => (
    <div className={`container my-4 mx-auto` || className}>
        {children}
    </div>
)

export default Container