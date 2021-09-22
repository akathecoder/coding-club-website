interface HamMenuProps {
    onClick: () => void;
}

export default function HamMenu({ onClick }: HamMenuProps) {
    return (
        <div onClick={onClick}>
            <div style={{ width: 30, height: 1 }} className="bg-white mb-2"></div>
            <div style={{ width: 30, height: 1 }} className="bg-white mb-2"></div>
            <div style={{ width: 30, height: 1 }} className="bg-white"></div>
        </div>
    );
}
