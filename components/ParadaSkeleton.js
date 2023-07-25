import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const ParadaSkeleton = ({ paradas }) => {
    return Array(paradas)
    .fill(0)
    .map((parada, key) => {
        return (
            <div
                key={key}
                className="bg-[#383838] mt-2 p-3 w-4/12 rounded shadow hover:bg-[#262626] transition-all"
            >
                <SkeletonTheme baseColor="#787878" highlightColor="#CCCCCC" key={key}>
                    <h2><Skeleton count={1} /></h2>
                    <p className="text-xs text-stone-400"><Skeleton count={1} /></p>
                </SkeletonTheme>
            </div>
        )
    })
}

export default ParadaSkeleton