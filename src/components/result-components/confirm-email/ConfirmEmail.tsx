import { useEffect, useState } from 'react';
import VerificationInput from 'react-verification-input';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { ExclamationCircleFilled } from '@ant-design/icons';

import { useConfirmEmailMutation } from '../../../services/authApi';
import { ServiceBackground } from '@components/result-components';
import { CardResult } from '@components/result-components';
import { Path } from '@utils/constants';
import { selectUserData } from '@utils/selectors';

import styles from './ConfirmEmail.module.scss';
import './ValidationInput.scss';

export const ConfirmEmail: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userData = useAppSelector(selectUserData);
    const [confirm] = useConfirmEmailMutation();
    const [borderStyle, setBorderStyle] = useState<string>('character');
    const [value, setValue] = useState<string>('');

    const onComplete = (value: string) => {
        confirm({ email: userData.email, code: value })
            .unwrap()
            .then(() => {
                navigate(Path.CHANGE_PASSWORD, { state: Path.CONFIRM_EMAIL });
            })
            .catch(() => {
                setBorderStyle('character-error'), setValue('');
            });
    };

    useEffect(() => {
        location.state != Path.AUTH ? navigate(Path.AUTH) : '';
    }, [location.state, navigate]);

    return (
        <ServiceBackground>
            <CardResult>
                <ExclamationCircleFilled
                    style={{ fontSize: 70, color: '#2F54EB', display: 'block', padding: 5 }}
                />
                <h2 className={styles.title}>
                    Введите код <br /> для восстановления аккауанта
                </h2>
                <p className={styles.subtitle}>
                    Мы отправили вам на e-mail <span> {userData.email} </span> шестизначный код.
                    Введите его в поле ниже.
                </p>
                <VerificationInput
                    value={value}
                    placeholder=''
                    inputProps={{ 'data-test-id': 'verification-input' }}
                    classNames={{
                        container: 'container',
                        character: `${borderStyle}`,
                        characterInactive: 'character__inactive',
                        characterSelected: 'character__selected',
                        characterFilled: 'character__filled',
                    }}
                    onChange={(value) => setValue(value)}
                    onComplete={onComplete}
                />
                <p className={styles.footer}>Не пришло письмо? Проверьте папку Спам.</p>
            </CardResult>
        </ServiceBackground>
    );
};
