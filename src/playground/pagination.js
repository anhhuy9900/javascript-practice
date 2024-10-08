const PAGE_LIMIT = 10;

function _paginationFunc({ data, currentPage = 0, sortField, sortBy = 0 }) {
    // logger.logError('BlockBettingService -> _paginationFunc -> body: %s', { currentPage, sortField, sortBy});
    let arrData = [];

    sortBy = Number(sortBy);
    currentPage = Number(currentPage) - 1;
    // let count =  0;
    // data = data.map((el, key) => {
    //   count++;
    //   return {
    //     ...el,
    //     totalBet: key % 3 ===0 ? -(el.totalBet + count) : el.totalBet
    //   }
    // })

    data = data.sort((a, b) => {
        let start = a[sortField];
        let next = b[sortField];
        if (typeof start === 'string' && start.indexOf(',') > -1) {
            return sortBy === 'ASC' ? start.localeCompare(next) : next.localeCompare(start);
        }

        if (start === next) {
            return 0;
        } else if (start < next) {
            return sortBy === 'ASC' ? -1 : 1;
        } else {
            return sortBy === 'ASC' ? 1 : -1;
        }
    });

    for (let i = 0; i < data.length; i += global.PAGE_LIMIT) {
        const endIndex = i + global.PAGE_LIMIT;
        let childData = data.slice(i, endIndex);

        childData = childData.map((el) => ({
            ...el,
            number: el.number.split(',').sort().join(','),
        }));
        arrData.push(childData);
    }

    arrData = arrData?.length ? arrData : [];

    return {
        data: currentPage ? arrData[Number(currentPage)] : arrData[0],
        totalPage: Number(arrData?.length),
        currentPage: Number(currentPage),
    };
}

_paginationFunc({
    data: [
        {
            id: 1,
            name: 'Page 1',
        },
        {
            id: 2,
            name: 'Page 2',
        }
    ],
    currentPage: 0,
    sortField: 'id',
    sortBy: 'DESC'
})