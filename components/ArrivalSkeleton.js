import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ArrivalSkeleton = ({ arrivals }) => {
    return Array(arrivals)
        .fill(0)
        .map((arriv, key) => (
            <div className="bg-[#383838] w-64 p-2 rounded h-32 shadow">
                <SkeletonTheme baseColor="#787878" highlightColor="#CCCCCC" key={key}>
                    <p>
                        <Skeleton count={3} />
                    </p>
                </SkeletonTheme>
            </div>
        ))
}

export default ArrivalSkeleton