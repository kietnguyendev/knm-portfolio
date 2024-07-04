interface IProps {
    children?: React.ReactNode;
}

function CardContent(props: IProps) {
    const { children } = props;

    return (
        <div className="content">{children}</div>
    );
}

export default CardContent;