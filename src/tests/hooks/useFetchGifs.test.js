import useFetchGifs from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('hooks', () => {

    test('Retornar estado inicial ', async () => {
        const { result,waitForNextUpdate } = renderHook(() => useFetchGifs('Marvel'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('debe retornar imgs y loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Marvel'));

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });

});
