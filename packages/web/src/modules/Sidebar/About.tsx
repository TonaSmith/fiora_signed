import React from 'react';

import Dialog from '../../components/Dialog';
import Style from './About.less';
import Common from './Common.less';

interface AboutProps {
    visible: boolean;
    onClose: () => void;
}

function About(props: AboutProps) {
    const { visible, onClose } = props;
    return (
        <Dialog
            className={Style.about}
            visible={visible}
            title="关于"
            onClose={onClose}
        >
            <div>
                <div className={Common.block}>
                    <p className={Common.title}>作者</p>
                    <a
                        href="https://caoyongzhuo.cn"
                        target="_black"
                        rel="noopener noreferrer"
                    >
                        https://caoyongzhuo.cn
                    </a>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>服务协议</p>
                    <a
                        href="/PrivacyPolicy.html"
                        target="_black"
                        rel="noopener noreferrer"
                    >
                        {`https://chat.caoyongzhuo.cn/PrivacyPolicy.html`}
                    </a>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>将聊天室安装到主屏(PWA)</p>
                    <ul>
                        <li>
                            点击地址栏最右边三个点按钮(或者地址栏末尾收藏前的按钮)
                        </li>
                        <li>选择&quot;安装 聊天室&quot;</li>
                    </ul>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>输入框快捷键</p>
                    <ul>
                        <li>Alt + S: 发送滑稽</li>
                        <li>Alt + D: 发送表情</li>
                    </ul>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>命令消息</p>
                    <ul>
                        <li>-roll [number]: 掷点</li>
                        <li>-rps: 石头剪刀布</li>
                    </ul>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>友情链接</p>
                    <ul>
                        <li>
                            <a
                                href="https://caoyongzhuo.cn"
                                target="_black"
                                rel="noopener noreferrer"
                            >
                                学金融的文科生
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Dialog>
    );
}

export default About;
