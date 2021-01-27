
const PageLoading = () => {
    return (
        <div className="d-flex justify-content-center" style={{ width: '100%' }}>
            <div className="spinner-grow text-warning" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default PageLoading;