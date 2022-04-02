import React from 'react';
import QRCode from 'qrcode.react';

import Dialog from '../../components/Dialog';
import Style from './Download.less';
import Common from './Common.less';

interface DownloadProps {
    visible: boolean;
    onClose: () => void;
}

function Download(props: DownloadProps) {
    const { visible, onClose } = props;
    const androidDownloadUrl = 'https://chat.caoyongzhuo/app/fiora.apk';
    const iOSDownloadUrl = '#';

    return (
        <Dialog
            className={Style.download}
            visible={visible}
            title="下载APP"
            onClose={onClose}
        >
            <div className={Common.container}>
                <div className={Common.block}>
                    <p className={Common.title}>Android</p>
                    <div className={Style.android}>
                        <p>
                            链接:{' '}
                            <a href='https://chat.caoyongzhuo/app/fiora.apk'>
                                'https://chat.caoyongzhuo/app/fiora.apk'
                            </a>
                        </p>
                      
                    </div>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>iOS</p>
                    <div className={Style.ios}>
                        <p>
                            链接: <a href='#'>暂未提供</a>
                        </p>
                        
                    </div>
                </div>
            </div>
        </Dialog>
    );
}

export default Download;
