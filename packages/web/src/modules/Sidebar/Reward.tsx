import React from 'react';

import AlipayImage from '@fiora/assets/images/alipay.png';
import WxpayImage from '@fiora/assets/images/wxpay.png';
import Dialog from '../../components/Dialog';
import Style from './Reward.less';

interface RewardProps {
    visible: boolean;
    onClose: () => void;
}

function Reward(props: RewardProps) {
    const { visible, onClose } = props;
    return (
        <Dialog
            className={Style.reward}
            visible={visible}
            title="打赏"
            onClose={onClose}
        >
            <div>
                <p className={Style.text}>
                    如果你觉得这个聊天室代码对你有帮助, 希望打赏下给个鼓励~~
                    <br />
                    作者大多数时间在线, 欢迎提问, 有问必答
                </p>
                <div className={Style.imageContainer}>
                    <img
                        className={Style.image}
                        src="https://caoyongzhuo.cn/wp-content/uploads/2022/03/alipay.jpg"
                        alt="支付宝二维码"
                    />
                    <img
                        className={Style.image}
                        src="https://caoyongzhuo.cn/wp-content/uploads/2022/03/wechatpay.jpg"
                        alt="微信二维码"
                    />
                </div>
            </div>
        </Dialog>
    );
}

export default Reward;
