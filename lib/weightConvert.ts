const weightConvert = (weight: number): string => {
    if (weight / 1000 >= 1) {
        return `${weight / 1000} kg`
    }

    return `${weight} g`
}

export default weightConvert