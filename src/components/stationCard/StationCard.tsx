import styles from "./styles.module.scss"
import Status from '@components/ui/status/Status'
import { ConnectorStandard } from "@common/types/stations"
import { CONNECTOR_HAS_ICON, CONNECTOR_STATUS_COLORS } from "@common/consts/stations"
import { STATION_STATUS_COLORS } from "@common/consts/stations"
import { ConnectorStatus } from "@common/types/stations"
import { StationStatus } from "@common/types/stations"
import electricRefuelingImage from '@assets/images/electric-refueling.svg'
import pathImage from '@assets/images/path.svg'
import ratingImage from '@assets/images/ratingStar.svg'

type Props = {
    onClick?: () => void;
    connectors: {
        type: ConnectorStandard;
        connectorStatus: ConnectorStatus;
        power: number;
    }[];
    name: string;
    address: string;
    rating?: number;
    metres_to_station?: number;
    stationStatus: StationStatus;
    disabled?: boolean;
};

export default function StationCard(props: Props) {

    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    };

    const connectorsToRender = props.connectors.length > 0 ? props.connectors : [props.connectors[0]];

    return (
        <div
            className={`${styles.stationCard} ${props.disabled ? styles.stationCard_disabled : ""}`}
            onClick={handleClick}
        >
            <div className={styles.stationCard__header}>
                <div
                    className={`${styles.header__icon} ${styles[`icon_${STATION_STATUS_COLORS[props.stationStatus]}`]}`}
                >
                    <img src={electricRefuelingImage} alt="electric-refueling" />
                </div>
                <div className={styles.header__content}>
                    <div className={styles.content__stationInfo}>
                        <p className={styles.stationInfo__text1}>{props.name}</p>
                        <p className={styles.stationInfo__text2}>{props.address}</p>
                    </div>
                    <div className={styles.content__path}>
                        <div className={styles.path__icon}>
                            <img src={pathImage} alt="path" />
                        </div>
                        <p className={styles.path__text}>{props.metres_to_station?.toLocaleString("ru-RU")} км</p>
                    </div>
                </div>
            </div>
            <div className={styles.stationCard__body}>
                <div className={styles.body__connectorsList}>
                    <div className={styles.connectorsList}>
                        {connectorsToRender.map((connector, index) => (
                            <div key={index} className={styles.connectorsList__connector}>
                                <div className={styles.connector__wrap}>
                                    <div className={styles.connector__icon}>
                                        <img src={CONNECTOR_HAS_ICON[connector.type]} alt={connector.type} />
                                    </div>
                                    <div className={styles.connector__content}>
                                        <div className={styles.content__firstColumn}>
                                            <p className={styles.firstColumn__text1}>{connector.type}</p>
                                            <p className={styles.firstColumn__text2}>{connector.power} кВт</p>
                                        </div>
                                        <div className={styles.content__secondColumn}>
                                            <div className={styles.secondColumn__veticalSplit}>
                                                <div className={styles.rectangleV}></div>
                                            </div>
                                            <div className={styles.secondColumn__status}>
                                                <Status textSize='small' text={connector.connectorStatus} color={CONNECTOR_STATUS_COLORS[connector.connectorStatus]}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {index !== connectorsToRender.length - 1 && (
                                    <div className={styles.connector__horizontalSplit}>
                                        <div className={styles.rectangleH}></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.body__rating}>
                    <div className={styles.rating__content}>
                        <img src={ratingImage} alt='rating'/>
                        <p className={styles.content__text}>{props.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}