const CHART_HEIGHT = 166

export const WEEKDAY_HAS_READABLE_DAY: Record<number, string> = {
    1: 'ПН',
    2: 'ВТ',
    3: 'СР',
    4: 'ЧТ',
    5: 'ПТ',
    6: 'СБ',
    7: 'ВС',
}

export namespace Distances {

    export const TOP_EDGE_DISTANCE = 6

    export const BOTTOM_EDGE_DISTANCE = 17

    export const RIGHT_EDGE_DISTANCE = 6

    export const LEFT_EDGE_DISTANCE = 25

    export const DISTANCE_BETWEEN_BOTTOM_AND_TEXT = 2
}

export const COLUMN_WIDTH = 20

export namespace ColumnInterpolationColors {

    export const MIN_GREEN = 200

    export const MAX_BLUE  = 128

    export const MIN_BLUE = 229

    export const MAX_GREEN = 112
}

export const HEIGHT = CHART_HEIGHT - Distances.BOTTOM_EDGE_DISTANCE - Distances.TOP_EDGE_DISTANCE

export const GAP_BEETWEEN_LINES = HEIGHT / 4

export namespace Colors {

    export const INACTIVE_COLUMN_COLOR = '#C8CED8'

    export const LINE_STROKE_COLOR = '#E8E8EE'
}

export namespace ColumnRadii {

    export const SMALL = 3

    export const NORMAL = 5
}

export const LINE_STROKE_WIDTH = 2

export const LINE_STROKE_DASHARRAY = 15

export const MIN_HEIGHT_COLUMN = 5

export const MIN_PERCENTAGE = 5

export const MAX_COLUMN_HEIGHT_WITH_SMALL_RADIUS = 7