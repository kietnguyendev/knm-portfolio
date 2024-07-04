
interface IProps {
    children?: React.ReactNode;
}

function Card(props: IProps) {
    const { children } = props;

    return (
        <div className="card">
            <div className="box">
                {children}
            </div>
        </div>
    );
}

export default Card;
