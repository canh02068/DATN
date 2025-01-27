import axios from "../utils/axiosCustomize";
const getALL = async () => {
    return axios.get("donhang/get-desc");
}
const getByDonHang = async (id) => {
    return axios.get(`donhang/get-by-don-hang/${id}`)
}
const duyetDon = async (obj) => {
    return axios.put("donhang/update", obj)
}
const getInDonHang = async (id) => {
    return axios.get(`/generate-invoice/${id}`)
}
export { getALL, getByDonHang, duyetDon, getInDonHang}