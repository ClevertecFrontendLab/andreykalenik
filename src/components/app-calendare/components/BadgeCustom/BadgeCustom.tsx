import { Badge } from 'antd';

const BADGE_COLOR: Record<string, string> = {
    Ноги: '#FF4D4F',
    Силовая: '#FADB14',
    Руки: '#13C2C2',
    Грудь: '#52C41A',
    Спина: '#FA8C16',
};

export const BadgeCustom = ({ name }: { name: string }) => {
    const colorBadge = BADGE_COLOR[name] || '#EB2F96';

    return <Badge color={colorBadge} text={name} />;
};
