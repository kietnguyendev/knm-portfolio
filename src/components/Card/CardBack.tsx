interface IProps {
    children?: React.ReactNode;
}

function CardBack(props: IProps) {
    const { children } = props;

    return (
        <div className="back">{children}</div>
    );
}

export default CardBack;