import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ArrivalSkeleton = ({ arrivals }) => {
    return Array(arrivals)
        .fill(0)
        .map((arriv, key) => (
            <div className="bg-[#383838] min-w-max h-28 md:w-64 p-2 rounded md:h-32 shadow" key={key}>
                <SkeletonTheme baseColor="#787878" highlightColor="#CCCCCC" key={key}>
                    <p>
                        <Skeleton count={3} />
                    </p>
                </SkeletonTheme>
            </div>
        ))
}

export default ArrivalSkeleton