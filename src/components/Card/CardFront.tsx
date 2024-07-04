interface IProps {
    children?: React.ReactNode;
}

function CardFront(props: IProps) {
    const { children } = props;

    return (
        <div className="front">{children}</div>
    );
}

export default CardFront;