import axios from "../utils/axiosCustomize";
const GetSanPham_asc = async () => {
    return axios.get("sanpham/get-asc/4");
}
const GetSanPham_desc = async () => {
    return axios.get("sanpham/get-desc");
}
const GetSanPhamNgauNhien = async () => {
    return axios.get("sanpham/get-random/4")
}
const GetByID = async (id) => {
    return axios.get(`sanpham/get-by-id/${id}`)
}
const getDanhMuc = async (id) => {
    return axios.get(`sanpham/get-by-loai/${id}`)
}
const timKiem = async (obj) => {
    return axios.post("sanpham/search", obj)
}
export { GetSanPham_asc,GetSanPham_desc, GetSanPhamNgauNhien, GetByID, getDanhMuc, timKiem }