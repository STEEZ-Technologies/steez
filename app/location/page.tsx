import { AmapLocation } from "@/components/ui/amap-location";

export default function LocationPage() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center p-8"
      style={{ background: "var(--bg)", color: "var(--fg)" }}
    >
      <AmapLocation
        addressZh="浙江省杭州市上城区赞成中心西楼"
        addressLabel="Room 1005-01, West Tower, Zancheng Center, Shangcheng District, Hangzhou, Zhejiang, China"
        keyword="赞成中心西楼"
        city="杭州"
      />
    </div>
  );
}
