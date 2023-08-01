export interface ContentVisor {
    Type: Type,
    Name: string,
    Path: string,
    Size: number,
    url: string,
    show: boolean,
}
type Type = 'img' | 'video' | 'audio' | 'pdf' | 'txt' | 'doc' | 'xls' | 'ppt' | 'zip' | 'other'

export interface Notify {
    show: boolean,
    message: string,
    type: 'success' | 'error' | 'warning' | 'info',
}