const interfaceConst = 'interface';

module.exports = (ComponentName, componentNameForCSS) => `import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './${ComponentName}.module.scss';

${interfaceConst} ${ComponentName}Props {
    className?: string;
}

export const ${ComponentName} = memo((props: ${ComponentName}Props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.${componentNameForCSS}, {}, [className])}>

        </div>
    );
});`;
