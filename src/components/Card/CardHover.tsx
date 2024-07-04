interface IProps {
    children?: React.ReactNode;
}

function CardHover(props: IProps) {
    const { children } = props;

    return (
        <div className="hover">{children}</div>
    );
}

export default CardHover;